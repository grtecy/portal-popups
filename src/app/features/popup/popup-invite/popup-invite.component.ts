import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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
  onSubmit() { this.submitted = true; }
  contactItems = ContactItems;
  constructor(
    private dialogRef: MatDialogRef<PopupInviteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  public closeMe() {
    this.dialogRef.close();
  }
  
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }

  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  saveFiles(files: FileList) {
    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      console.log(files[0].size, files[0].name, files[0].type);
    }
  }

  onTrackBy (index: any) {
    return index;
  }
}