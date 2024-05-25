import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakecongeComponent } from './makeconge.component';

describe('MakecongeComponent', () => {
  let component: MakecongeComponent;
  let fixture: ComponentFixture<MakecongeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakecongeComponent]
    });
    fixture = TestBed.createComponent(MakecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
