import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from 'src/app/utils/services/back.service';
import { PaidRequest } from '../../../types/popup';
import { MonthlyTypes } from '../../../utils/constants';
@Component({
    selector: 'app-popup-paid',
    templateUrl: './popup-paid.component.html',
    styleUrls: ['../popup.component.css', './popup-paid.component.css']
})

export class PopupPaidComponent implements OnInit {
    @Input() error: string | undefined;
    @Input() dragAreaClass: string | undefined;
    @Input() requiestForm!: FormGroup;
    @Input() files!: FileList;
    @Input() images!: FileList;
    filesNames: string[] = [];
    imageNames: string[] = [];
    dummyText = '';
    model = new PaidRequest('', '', '', 0, 'monthly', [], []);
    newWebsiteRequest() {
        this.model = new PaidRequest('', '', 'monthly', 0, '', [], []);
    }
    submitted = false;

    monthlyTypes = MonthlyTypes;
    constructor(
        public objBack: BackService,
        private dialogRef: MatDialogRef<PopupPaidComponent>,
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
            description: ['', Validators.required],
            budget: ['', [Validators.required]],
            isMonthly: ['', [Validators.required]],
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
            budget: this.f.budget.value,
            isMonthly: this.f.isMonthly.value,
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
            this.objBack.savePaidFrom(data)
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