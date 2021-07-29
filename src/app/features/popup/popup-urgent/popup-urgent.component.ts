import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from 'src/app/utils/services/back.service';
import { UrgentRequest } from '../../../types/popup';
import { ContactItems } from '../../../utils/constants';
@Component({
    selector: 'app-popup-urgent',
    templateUrl: './popup-urgent.component.html',
    styleUrls: ['../popup.component.css', './popup-urgent.component.css']
})

export class PopupUrgentComponent implements OnInit {
    @Input() error: string | undefined;
    @Input() dragAreaClass: string | undefined;
    @Input() requiestForm!: FormGroup;
    @Input() files!: FileList;
    @Input() images!: FileList;
    filesNames: string[] = [];
    imageNames: string[] = [];
    urlPages: string[] = [''];
    dummyText = '';
    model = new UrgentRequest('', '', [''], '', '', [], []);
    newUrgentRequest() {
        this.model = new UrgentRequest('', '', [''], '', '', [], []);
    }
    submitted = false;

    contactItems = ContactItems;
    constructor(
        public objBack: BackService,
        private dialogRef: MatDialogRef<PopupUrgentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder) {
    }


    public closeMe() {
        this.dialogRef.close();
    }


    ngOnInit() {
        this.dragAreaClass = "dragarea";
        this.requiestForm = this.formBuilder.group({
            type: ['', [Validators.required]],
            description: ['', [Validators.required]],
            urlPages: this.urlPages,
            deviceIssue: [''],
            browserIssue: [''],
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
        const formData = {
            type: this.f.type.value,
            description: this.f.description.value,
            urlPages: this.urlPages,
            deviceIssue: this.f.deviceIssue.value,
            browserIssue: this.f.browserIssue.value,
            filesUploaded: this.f.filesUploaded.value,
            imagesUploaded: this.f.imagesUploaded.value,
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
    onTrackBy(index: any) {
        return index;
    }

    public addUrlPages() {
        this.urlPages.push('');
    }

    public removeUrlPages(i: number) {
        if (i !== -1) {
            this.urlPages.splice(i, 1);
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
    async savePortal(data: any) {
        try {
            this.objBack.saveUrgentFrom(data)
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