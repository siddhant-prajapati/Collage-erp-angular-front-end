import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffChartComponent } from './staff-chart.component';

describe('StaffChartComponent', () => {
  let component: StaffChartComponent;
  let fixture: ComponentFixture<StaffChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
