import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateannouncementsComponent } from './createannouncements.component';

describe('CreateannouncementsComponent', () => {
  let component: CreateannouncementsComponent;
  let fixture: ComponentFixture<CreateannouncementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateannouncementsComponent]
    });
    fixture = TestBed.createComponent(CreateannouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
