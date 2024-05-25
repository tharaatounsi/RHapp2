import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakesuggestionComponent } from './makesuggestion.component';

describe('MakesuggestionComponent', () => {
  let component: MakesuggestionComponent;
  let fixture: ComponentFixture<MakesuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakesuggestionComponent]
    });
    fixture = TestBed.createComponent(MakesuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
