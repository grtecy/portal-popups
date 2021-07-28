import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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
  dummyText = '';
  model = new UrgentRequest('', '', [''], '', '', [], []);
  newUrgentRequest() {
    this.model = new UrgentRequest('', '', [''], '', '', [], []);
  }
  submitted = false;
  onSubmit() { this.submitted = true; }
  contactItems = ContactItems;
  constructor(
    private dialogRef: MatDialogRef<PopupUrgentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
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

  public addUrlPages() {
    this.model.urlPages.push('');
  }

  public removeUrlPages(i: number) {
    if (i !== -1) {
        this.model.urlPages.splice(i, 1);
    }    
  }
}