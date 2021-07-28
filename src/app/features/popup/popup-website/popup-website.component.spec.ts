import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWebsiteComponent } from './popup-website.component';

describe('PopupWebsiteComponent', () => {
  let component: PopupWebsiteComponent;
  let fixture: ComponentFixture<PopupWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
