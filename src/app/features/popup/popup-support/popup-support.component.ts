import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from 'src/app/utils/services/back.service';
import { SupportRequest } from '../../../types/popup';
import { ProviderOptions, UrgencyOptions } from '../../../utils/constants';
@Component({
    selector: 'app-popup-support',
    templateUrl: './popup-support.component.html',
    styleUrls: ['../popup.component.css', './popup-support.component.css']
})

export class PopupSupportComponent implements OnInit {
    @Input() error: string | undefined;
    @Input() dragAreaClass: string | undefined;
    @Input() requiestForm!: FormGroup;
    @Input() files!: FileList;
    @Input() images!: FileList;
    filesNames: string[] = [];
    imageNames: string[] = [];
    whoProvides: string[] = ['auto_fill'];
    dummyText = '';
    model = new SupportRequest('', '', '', ['auto_fill'], 'low', [], []);
    newWebsiteRequest() {
        this.model = new SupportRequest('', '', '', ['auto_fill'], 'low', [], []);
    }
    submitted = false;

    providerOptions = ProviderOptions;
    urgencyOptions = UrgencyOptions
    constructor(
        public objBack: BackService,
        private dialogRef: MatDialogRef<PopupSupportComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder) {
    }


    public closeMe() {
        this.dialogRef.close();
    }


    ngOnInit() {
        this.dragAreaClass = "dragarea";
        this.requiestForm = this.formBuilder.group({
            name: ['', Validators.required],
            type: ['', [Validators.required]],
            description: ['', [Validators.required]],
            whoProvides: this.whoProvides,
            urgency: ['', [Validators.required]],
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
            name: this.f.name.value,
            type: this.f.type.value,
            description: this.f.description.value,
            whoProvides: this.whoProvides,
            urgency: this.f.urgency.value,
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

    public addProvides() {
        this.whoProvides.push('auto_fill');
    }

    public removeProvides(i: number) {
        if (i !== -1) {
            this.whoProvides.splice(i, 1);
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
            this.objBack.saveSupportFrom(data)
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