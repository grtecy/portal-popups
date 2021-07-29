import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDenialComponent } from './project-denial.component';

describe('ProjectDenialComponent', () => {
    let component: ProjectDenialComponent;
    let fixture: ComponentFixture<ProjectDenialComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectDenialComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectDenialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
