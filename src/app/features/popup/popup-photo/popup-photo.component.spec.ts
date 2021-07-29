import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPhotoComponent } from './popup-photo.component';

describe('PopupItemComponent', () => {
    let component: PopupPhotoComponent;
    let fixture: ComponentFixture<PopupPhotoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PopupPhotoComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupPhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
