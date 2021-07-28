import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupItemComponent } from './popup-item/popup-item.component';
import { PopupGraphicComponent } from './popup-graphic/popup-graphic.component';
import { PopupPhotoComponent } from './popup-photo/popup-photo.component';
import { PopupWebsiteComponent } from './popup-website/popup-website.component';
import { PopupPaidComponent } from './popup-paid/popup-paid.component';
import { PopupSocialComponent } from './popup-social/popup-social.component';
import { PopupSupportComponent } from './popup-support/popup-support.component';
import { PopupUrgentComponent } from './popup-urgent/popup-urgent.component';
import { PopupInviteComponent } from './popup-invite/popup-invite.component';
import { ProjectDenialComponent } from './project-denial/project-denial.component';
import { RequestChangeComponent } from './request-change/request-change.component';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openItemRequest(): void {
    const dialogItem = this.dialog.open(PopupItemComponent, {
      width: '500px',
      panelClass: "popup-design"
    });

    dialogItem.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openItemGraphic(): void {
    const dialogGraphic = this.dialog.open(PopupGraphicComponent, {
      width: '500px',
      panelClass: "popup-design"
    });

    dialogGraphic.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openItemPhoto(): void {
    const dialogGraphic = this.dialog.open(PopupPhotoComponent, {
      width: '500px',
      panelClass: "popup-design"
    });

    dialogGraphic.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openItemWebsite(): void {
    const dialogGraphic = this.dialog.open(PopupWebsiteComponent, {
      width: '500px',
      panelClass: "popup-design"
    });

    dialogGraphic.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openItemPaid(): void {
    const dialogGraphic = this.dialog.open(PopupPaidComponent, {
      width: '500px',
      panelClass: "popup-design"
    });

    dialogGraphic.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openItemSocial(): void {
    const dialogGraphic = this.dialog.open(PopupSocialComponent, {
      width: '500px',
      panelClass: "popup-design"
    });

    dialogGraphic.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openItemSupport(): void {
    const dialogGraphic = this.dialog.open(PopupSupportComponent, {
      width: '500px',
      panelClass: "popup-design"
    });

    dialogGraphic.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openItemUrgent(): void {
    const dialogGraphic = this.dialog.open(PopupUrgentComponent, {
      width: '500px',
      panelClass: "popup-design",
      autoFocus: false
    });

    dialogGraphic.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openItemInvite(): void {
    const dialogGraphic = this.dialog.open(PopupInviteComponent, {
      width: '500px',
      panelClass: "popup-design"
    });

    dialogGraphic.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  
  openItemDeny(): void {
    const dialogGraphic = this.dialog.open(ProjectDenialComponent, {
      width: '500px',
      panelClass: "popup-design"
    });

    dialogGraphic.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openRequestChange(): void {
    const dialogGraphic = this.dialog.open(RequestChangeComponent, {
      width: '500px',
      panelClass: "popup-design"
    });

    dialogGraphic.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  

  
  

  
}
