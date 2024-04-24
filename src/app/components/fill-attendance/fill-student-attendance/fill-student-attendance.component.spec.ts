import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillStudentAttendanceComponent } from './fill-student-attendance.component';

describe('FillStudentAttendanceComponent', () => {
  let component: FillStudentAttendanceComponent;
  let fixture: ComponentFixture<FillStudentAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillStudentAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FillStudentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
