import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMeetingsTableComponent } from './upcoming-meetings-table.component';

describe('UpcomingMeetingsTableComponent', () => {
  let component: UpcomingMeetingsTableComponent;
  let fixture: ComponentFixture<UpcomingMeetingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingMeetingsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcomingMeetingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
