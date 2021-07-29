import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from 'src/app/utils/services/back.service';
import { PhotoRequest } from '../../../types/popup';
import { ShootTypes, ScheduleOptions } from '../../../utils/constants';
@Component({
    selector: 'app-popup-photo',
    templateUrl: './popup-photo.component.html',
    styleUrls: ['./popup-photo.component.css', '../popup.component.css']
})

export class PopupPhotoComponent implements OnInit {
    @Input() error: string | undefined;
    @Input() dragAreaClass: string | undefined;
    @Input() requiestForm!: FormGroup;
    @Input() files!: FileList;
    @Input() images!: FileList;
    filesNames: string[] = [];
    imageNames: string[] = [];
    contactSchedules: string[] = ['auto_fill']
    dummyText = '';
    model = new PhotoRequest('', 'photo', '', ['auto_fill', 'schedule_1'], [], []);
    newGraphicRequest() {
        this.model = new PhotoRequest('', 'photo', '', ['auto_fill', 'schedule_1'], [], []);
    }
    submitted = false;

    shootTypes = ShootTypes;
    scheduleOptions = ScheduleOptions
    constructor(
        public objBack: BackService,
        private dialogRef: MatDialogRef<PopupPhotoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder) {
    }


    public closeMe() {
        this.dialogRef.close();
    }

    public addContacts() {
        this.contactSchedules.push('dummy1');
    }

    public removeContacts(i: number) {
        if (i !== -1) {
            this.contactSchedules.splice(i, 1);
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
    
    ngOnInit() {
        this.dragAreaClass = "dragarea";
        this.requiestForm = this.formBuilder.group({
            name: ['', Validators.required],
            shootType: ['', Validators.required],
            description: ['', [Validators.required]],
            contactSchedules: this.contactSchedules,
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
            description: this.f.description.value,
            shootType: this.f.shootType.value,
            contactSchedules: this.contactSchedules,
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

    ChangeContactsValue(event: any, i: number) {
        // this.model.contactsReviews[i] = event.target.value;
        console.log('contacatreaviews', this.model.contactSchedules);
    }
    onTrackBy(index: any) {
        return index;
    }

    async savePortal(data: any) {
        try {
            this.objBack.savePhotoFrom(data)
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