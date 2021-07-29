import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BackService } from 'src/app/utils/services/back.service';
import { InviteRequest } from '../../../types/popup';
import { ContactItems } from '../../../utils/constants';
@Component({
    selector: 'app-popup-invite',
    templateUrl: './popup-invite.component.html',
    styleUrls: ['../popup.component.css', './popup-invite.component.css']
})

export class PopupInviteComponent implements OnInit {
    @Input() error: string | undefined;
    @Input() dragAreaClass: string | undefined;
    dummyText = '';
    model = new InviteRequest('', '', '', '', true, true, true, true, true);
    newInviteRequest() {
        this.model = new InviteRequest('', '', '', '', true, true, true, true, true);
    }
    submitted = false;
    onSubmit() {
        this.submitted = true;
        this.savePortal(this.model);
    }
    contactItems = ContactItems;
    constructor(
        public objBack: BackService,
        private dialogRef: MatDialogRef<PopupInviteComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }


    public closeMe() {
        this.dialogRef.close();
    }

    onFileChange(event: any) {
        let files: FileList = event.target.files;
        this.saveFiles(files);
    }

    ngOnInit() {
    }

    saveFiles(files: FileList) {
        if (files.length > 1) this.error = "Only one file at time allow";
        else {
            this.error = "";
            console.log(files[0].size, files[0].name, files[0].type);
        }
    }

    onTrackBy(index: any) {
        return index;
    }

    async savePortal(data: any) {
        try {
            this.objBack.saveInviteFrom(data)
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