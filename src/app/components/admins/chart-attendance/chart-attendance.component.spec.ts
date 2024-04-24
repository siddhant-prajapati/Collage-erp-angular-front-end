import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAttendanceComponent } from './chart-attendance.component';

describe('ChartAttendanceComponent', () => {
  let component: ChartAttendanceComponent;
  let fixture: ComponentFixture<ChartAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
