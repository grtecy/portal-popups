import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUrgentComponent } from './popup-urgent.component';

describe('PopupUrgentComponent', () => {
  let component: PopupUrgentComponent;
  let fixture: ComponentFixture<PopupUrgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupUrgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
