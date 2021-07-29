
import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from 'src/app/utils/services/back.service';
import { DenyRequest } from '../../../types/popup';
import { DenyOptions } from '../../../utils/constants';
@Component({
    selector: 'app-project-denial',
    templateUrl: './project-denial.component.html',
    styleUrls: ['../popup.component.css', './project-denial.component.css']
})

export class ProjectDenialComponent implements OnInit {
    @Input() error: string | undefined;
    @Input() dragAreaClass: string | undefined;
    @Input() denyForm!: FormGroup;
    dummyText = '';
    denyOptions = DenyOptions;
    denyFormSubmitted = false;

    constructor(
        private dialogRef: MatDialogRef<ProjectDenialComponent>,
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
        this.denyForm = this.formBuilder.group({
            reason: ['', Validators.required],
            type: ['writing', Validators.required]
        });
    }

    onDenySubmit() {
        this.denyFormSubmitted = true;

        if (this.denyForm.invalid) {
            return;
        }

        const formData = {
            reason: this.denyf.reason.value,
            type: this.denyf.type.value

        };
        this.saveDeny(formData)
    }

    get denyf() { return this.denyForm.controls; }


    async saveDeny(data: any) {
        try {
            this.objBack.submitDenyFrom(data)
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

    onTrackBy(index: any) {
        return index;
    }

    changeStatus(name: string) {
        this.denyForm.patchValue({
            type: name
        });
    }
}