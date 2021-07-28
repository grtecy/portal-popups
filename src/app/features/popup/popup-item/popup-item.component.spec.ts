import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupItemComponent } from './popup-item.component';

describe('PopupItemComponent', () => {
  let component: PopupItemComponent;
  let fixture: ComponentFixture<PopupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
