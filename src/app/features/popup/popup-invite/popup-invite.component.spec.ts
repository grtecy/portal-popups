import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInviteComponent } from './popup-invite.component';

describe('PopupInviteComponent', () => {
  let component: PopupInviteComponent;
  let fixture: ComponentFixture<PopupInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
