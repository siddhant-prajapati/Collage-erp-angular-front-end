import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillStaffAttendanceComponent } from './fill-staff-attendance.component';

describe('FillStaffAttendanceComponent', () => {
  let component: FillStaffAttendanceComponent;
  let fixture: ComponentFixture<FillStaffAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillStaffAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FillStaffAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
