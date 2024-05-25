import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobmenuComponent } from './jobmenu.component';

describe('JobmenuComponent', () => {
  let component: JobmenuComponent;
  let fixture: ComponentFixture<JobmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobmenuComponent]
    });
    fixture = TestBed.createComponent(JobmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
