import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from 'src/app/utils/services/back.service';

@Component({
    selector: 'app-request-change',
    templateUrl: './request-change.component.html',
    styleUrls: ['../popup.component.css', './request-change.component.css']
})

export class RequestChangeComponent implements OnInit {
    @Input() error: string | undefined;
    @Input() dragAreaClass: string | undefined;
    @Input() changeForm!: FormGroup;
    changeFormSubmitted = false;

    constructor(
        private dialogRef: MatDialogRef<RequestChangeComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public objBack: BackService,
        private formBuilder: FormBuilder
    ) {
    }

    public closeMe() {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.dragAreaClass = "dragarea";
        this.changeForm = this.formBuilder.group({
            reason: ['', Validators.required],
        });
    }

    get changef() { return this.changeForm.controls; }


    onChangeSubmit() {
        this.changeFormSubmitted = true;

        if (this.changeForm.invalid) {
            return;
        }

        const formData = {
            reason: this.changef.reason.value,

        };
        this.saveChange(formData)
    }


    async saveChange(data: any) {
        try {
            this.objBack.submitChangeFrom(data)
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