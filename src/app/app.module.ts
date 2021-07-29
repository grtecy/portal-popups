import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './features/popup/popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule  } from '@angular/material/dialog';
import { PopupItemComponent } from './features/popup/popup-item/popup-item.component';
import { PopupGraphicComponent } from './features/popup/popup-graphic/popup-graphic.component';
import { PopupPhotoComponent } from './features/popup/popup-photo/popup-photo.component';
import { PopupWebsiteComponent } from './features/popup/popup-website/popup-website.component';
import { PopupPaidComponent } from './features/popup/popup-paid/popup-paid.component';
import { PopupSocialComponent } from './features/popup/popup-social/popup-social.component';
import { PopupSupportComponent } from './features/popup/popup-support/popup-support.component';
import { PopupUrgentComponent } from './features/popup/popup-urgent/popup-urgent.component';
import { PopupInviteComponent } from './features/popup/popup-invite/popup-invite.component';
import { ProjectDenialComponent } from './features/popup/project-denial/project-denial.component';
import { RequestChangeComponent } from './features/popup/request-change/request-change.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    PopupItemComponent,
    PopupGraphicComponent,
    PopupPhotoComponent,
    PopupWebsiteComponent,
    PopupPaidComponent,
    PopupSocialComponent,
    PopupSupportComponent,
    PopupUrgentComponent,
    PopupInviteComponent,
    ProjectDenialComponent,
    RequestChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faUpload, faMinusCircle, faPlusCircle, faPlus, faMinus);
  }
}
