import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSocialComponent } from './popup-social.component';

describe('PopupItemComponent', () => {
  let component: PopupSocialComponent;
  let fixture: ComponentFixture<PopupSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
