
import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from 'src/app/utils/services/back.service';
import { ItemRequest } from '../../../types/popup';
import { ContactItems } from '../../../utils/constants';

@Component({
    selector: 'app-popup-item',
    templateUrl: './popup-item.component.html',
    styleUrls: ['../popup.component.css', './popup-item.component.css']
})

export class PopupItemComponent implements OnInit {

    constructor(
        public objBack: BackService,
        private dialogRef: MatDialogRef<PopupItemComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder) {
    }

    @Input() error: string | undefined;
    @Input() dragAreaClass: string | undefined;
    @Input() requiestForm!: FormGroup;
    @Input() files!: FileList;
    @Input() images!: FileList;
    filesNames: string[] = [];
    imageNames: string[] = [];
    contactsReviews: string[] = ['auto_fill'];
    dummyText = '';
    submitted = false;
    contactItems = ContactItems;


    public closeMe() {
        this.dialogRef.close();
    }

    public addContacts() {
        this.contactsReviews.push('auto_fill');
    }

    public removeContacts(i: number) {
        if (i !== -1) {
            this.contactsReviews.splice(i, 1);
        }
    }

    ngOnInit() {

        this.requiestForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            requestDate: ['', [Validators.required]],
            contactsReviews: [['auto_fill']],
            filesUploaded: [''],
            imagesUploaded: ['']
        });


    }
    get f() { return this.requiestForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.requiestForm.invalid) {

            return;
        }
        this.requiestForm.patchValue({
            filesUploaded: this.images
        });
        const formData = {
            name: this.f.name.value,
            description: this.f.description.value,
            requestDate: this.f.requestDate.value,
            contactsReviews: this.contactsReviews,
            filesUploaded: this.files,
            imagesUploaded: this.images,
        };

        this.savePortal(formData)
    }
    @HostListener("dragover", ["$event"]) onDragOver(event: any) {
        event.preventDefault();
    }

    uploadFiles(event: any) {
        event.preventDefault();
        event.stopPropagation();
        this.files = event.dataTransfer.files;
        for (var i = 0; i < event.dataTransfer.files.length; i++) {
            this.filesNames.push(event.dataTransfer.files[i].name);
        }
    }

    uploadImages(event: any) {
        event.preventDefault();
        event.stopPropagation();
        this.images = event.dataTransfer.files;
        for (var i = 0; i < event.dataTransfer.files.length; i++) {
            this.imageNames.push(event.dataTransfer.files[i].name);
        }
    }

    onImageChange(event: any) {
        let files: FileList = event.target.files;
        this.images = event.target.files;
        for (var i = 0; i < event.target.files.length; i++) {
            this.imageNames.push(event.target.files[i].name);
        }
    }

    onFileChange(event: any) {
        let files: FileList = event.target.files;
        this.files = event.target.files;
        for (var i = 0; i < event.target.files.length; i++) {
            this.filesNames.push(event.target.files[i].name);
        }
    }

    removeFile(i: number){
        if (i !== -1) {
            this.filesNames.splice(i, 1);
        }
    }

    removeImage(i: number){
        if (i !== -1) {
            this.imageNames.splice(i, 1);
        }
    }


    ChangeContactsValue(event: any, i: number) {
    }

    onTrackBy(index: any) {
        return index;
    }

    async savePortal(data: any) {
        try {
            this.objBack.saveItemFrom(data)
                .pipe()
                .subscribe((apiResponse) => {

                    if (apiResponse.status == 'success') {
                        console.log("success");
                    }
                },
                    error => {
                        console.log('invalid')

                    });
        }
        catch (err) {
        }
    }
}