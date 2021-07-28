import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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
  dummyText = '';
  model = new PhotoRequest('', 'photo', '', ['auto_fill'], [], []);
  newGraphicRequest() {
    this.model = new PhotoRequest('', 'photo', '', ['auto_fill'], [], []);
  }
  submitted = false;
  onSubmit() { this.submitted = true; }
  shootTypes = ShootTypes;
  scheduleOptions = ScheduleOptions
  constructor(
    private dialogRef: MatDialogRef<PopupPhotoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  public closeMe() {
    this.dialogRef.close();
  }
  
  public addContacts() {
    this.model.contactSchedules.push('dummy1');
    console.log('model_added', this.model);
  }

  public removeContacts(i: number) {
    if (i !== -1) {
        this.model.contactSchedules.splice(i, 1);
    }    
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

  ChangeContactsValue(event: any, i: number){
    // this.model.contactsReviews[i] = event.target.value;
    console.log('contacatreaviews', this.model.contactSchedules);
  }
  onTrackBy (index: any) {
    return index;
  }
}