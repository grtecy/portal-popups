import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPaidComponent } from './popup-paid.component';

describe('PopupPaidComponent', () => {
    let component: PopupPaidComponent;
    let fixture: ComponentFixture<PopupPaidComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PopupPaidComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupPaidComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
