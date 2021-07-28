import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from 'src/app/utils/services/back.service';
import { GraphicRequest } from '../../../types/popup';
import { ContactItems } from '../../../utils/constants';
@Component({
  selector: 'app-popup-graphic',
  templateUrl: './popup-graphic.component.html',
  styleUrls: ['../popup.component.css']
})

export class PopupGraphicComponent implements OnInit {
  @Input() error: string | undefined;
  @Input() dragAreaClass: string | undefined;
  @Input() requiestForm!: FormGroup;
  dummyText = '';
  model = new GraphicRequest('', '', '', 0, true, 0, '2021-01-01', ['auto_fill'], [], []);
  newGraphicRequest() {
    this.model = new GraphicRequest('', '', '', 0, true, 0, '2021-01-01', ['auto_fill'], [], []);
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;

    if (this.requiestForm.invalid) {

      return;
    }
  }
  contactItems = ContactItems;
  constructor(
    public objBack: BackService,
    private dialogRef: MatDialogRef<PopupGraphicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {
  }


  public closeMe() {
    this.dialogRef.close();
  }

  public addContacts() {
    this.model.contactsReviews.push('dummy1');
    console.log('model_added', this.model);
  }

  public removeContacts(i: number) {
    if (i !== -1) {
      this.model.contactsReviews.splice(i, 1);
    }
  }
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }

  ngOnInit() {
    this.dragAreaClass = "dragarea";
    this.requiestForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', [Validators.required]],
      size: ['', [Validators.required]],
      isQuote: ['', [Validators.required]],
      quantities: ['', [Validators.required]],
      requestDate: [''],
      contactsReviews: [''],
      filesUploaded: [''],
      imagesUploaded: ['']
    });
  }

  get f() { return this.requiestForm.controls; }

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

  ChangeContactsValue(event: any, i: number) {
    // this.model.contactsReviews[i] = event.target.value;
    console.log('contacatreaviews', this.model.contactsReviews);
  }
  onTrackBy(index: any) {
    return index;
  }
}