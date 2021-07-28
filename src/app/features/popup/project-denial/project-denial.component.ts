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
  dummyText = '';
  model = new DenyRequest('writing', '');
  newWebsiteRequest() {
    this.model = new DenyRequest('', '');
  }
  submitted = false;
  onSubmit() { this.submitted = true; }
  denyOptions = DenyOptions;
  constructor(
    private dialogRef: MatDialogRef<ProjectDenialComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
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
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
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

  changeStatus (name: string){
    this.model.type = name;
  }
}