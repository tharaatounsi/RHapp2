import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlsComponent } from './admin-controls.component';

describe('AdminControlsComponent', () => {
  let component: AdminControlsComponent;
  let fixture: ComponentFixture<AdminControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminControlsComponent]
    });
    fixture = TestBed.createComponent(AdminControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
