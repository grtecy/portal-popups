import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from 'src/app/utils/services/back.service';
import { GraphicRequest } from '../../../types/popup';
import { ContactItems } from '../../../utils/constants';
@Component({
    selector: 'app-popup-graphic',
    templateUrl: './popup-graphic.component.html',
    styleUrls: ['../popup.component.css', './popup-graphic.component.css']
})

export class PopupGraphicComponent implements OnInit {
    @Input() error: string | undefined;
    @Input() dragAreaClass: string | undefined;
    @Input() requiestForm!: FormGroup;
    @Input() files!: FileList;
    @Input() images!: FileList;
    filesNames: string[] = [];
    imageNames: string[] = [];
    contactsReviews: string[] = ['auto_fill'];
    dummyText = '';
    model = new GraphicRequest('', '', '', 0, true, 0, '2021-01-01', ['auto_fill'], [], []);
    newGraphicRequest() {
        this.model = new GraphicRequest('', '', '', 0, true, 0, '2021-01-01', ['auto_fill'], [], []);
    }
    submitted = false;

    contactItems = ContactItems;
    constructor(
        public objBack: BackService,
        private dialogRef: MatDialogRef<PopupGraphicComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder) {
    }


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

    ngOnInit() {
        this.dragAreaClass = "dragarea";
        this.requiestForm = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            type: ['', [Validators.required]],
            size: ['', [Validators.required]],
            isQuote: ['', [Validators.required]],
            quantities: ['', [Validators.required]],
            requestDate: [''],
            contactsReviews: this.contactsReviews,
            filesUploaded: [''],
            imagesUploaded: ['']
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.requiestForm.invalid) {

            return;
        }

        const formData = {
            name: this.f.name.value,
            description: this.f.description.value,
            type: this.f.type.value,
            size: this.f.size.value,
            isQuote: this.f.isQuote.value,
            quantities: this.f.quantities.value,
            requestDate: this.f.requestDate.value,
            contactsReviews: this.contactsReviews,
            filesUploaded: this.f.filesUploaded.value,
            imagesUploaded: this.f.imagesUploaded.value,
        };

        this.savePortal(formData)
    }

    get f() { return this.requiestForm.controls; }

    @HostListener("dragover", ["$event"]) onDragOver(event: any) {
        event.preventDefault();
    }

    uploadFiles(event: any) {
        console.log(event);
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


    ChangeContactsValue(event: any, i: number) {
        // this.model.contactsReviews[i] = event.target.value;
        console.log('contacatreaviews', this.model.contactsReviews);
    }
    onTrackBy(index: any) {
        return index;
    }
    async savePortal(data: any) {
        try {
            this.objBack.saveGraphicFrom(data)
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