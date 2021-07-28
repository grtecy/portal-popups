
import { Component, Inject, Input, OnInit, Injectable, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackService } from 'src/app/utils/services/back.service';
import { ItemRequest } from '../../../types/popup';
import { ContactItems } from '../../../utils/constants';

@Component({
  selector: 'app-popup-item',
  templateUrl: './popup-item.component.html',
  styleUrls: ['../popup.component.css']
})

export class PopupItemComponent implements OnInit {

  constructor(
    public objBack: BackService,
    private dialogRef: MatDialogRef<PopupItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) {
  }

  @Input() error: string | undefined;
  @Input() dragAreaClass: string | undefined;
  @Input() requiestForm!: FormGroup;
  @Input() files!: FileList;
  dummyText = '';

  model = new ItemRequest('', '', '2021-01-01', ['auto_fill'], [], []);

  submitted = false;

  newItemRequest() {
    this.model = new ItemRequest('', '', '2021-01-01', ['auto_fill'], [], []);
  }

  contactItems = ContactItems;


  public closeMe() {
    this.dialogRef.close();
  }

  public addContacts() {
    this.model.contactsReviews.push('dummy1');
  }

  public removeContacts(i: number) {
    if (i !== -1) {
      this.model.contactsReviews.splice(i, 1);
    }
  }
  onFileChange(event: any) {
    this.files = event.target.files;
  }

  ngOnInit() {
    this.dragAreaClass = "dragarea";
    this.requiestForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      requestDate: ['2021-01-01', [Validators.required]],
      contactsReviews: [['auto_fill']],
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
      requestDate: this.f.requestDate.value,
      contactsReviews: this.f.contactsReviews.value,
      filesUploaded: this.f.filesUploaded.value,
      imagesUploaded: this.f.imagesUploaded.value,
    };

    this.savePortal(formData)
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
    this.files = event.dataTransfer.files;
  }

  ChangeContactsValue(event: any, i: number) {
    console.log('contacatreaviews', this.model.contactsReviews);
  }
  onTrackBy(index: any) {
    return index;
  }

  async savePortal(data: any) {
    try {
      this.objBack.savePortal(data)
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