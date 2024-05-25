import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemeetingsComponent } from './createmeetings.component';

describe('CreatemeetingsComponent', () => {
  let component: CreatemeetingsComponent;
  let fixture: ComponentFixture<CreatemeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatemeetingsComponent]
    });
    fixture = TestBed.createComponent(CreatemeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
