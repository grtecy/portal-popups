import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGraphicComponent } from './popup-graphic.component';

describe('PopupItemComponent', () => {
  let component: PopupGraphicComponent;
  let fixture: ComponentFixture<PopupGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
