import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSupportComponent } from './popup-support.component';

describe('PopupSupportComponent', () => {
    let component: PopupSupportComponent;
    let fixture: ComponentFixture<PopupSupportComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PopupSupportComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupSupportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
