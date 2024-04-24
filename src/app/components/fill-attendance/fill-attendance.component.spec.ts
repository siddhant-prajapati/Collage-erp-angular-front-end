import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillAttendanceComponent } from './fill-attendance.component';

describe('FillAttendanceComponent', () => {
  let component: FillAttendanceComponent;
  let fixture: ComponentFixture<FillAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FillAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
