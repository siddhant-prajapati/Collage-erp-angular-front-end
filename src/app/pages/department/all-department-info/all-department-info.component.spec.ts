import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDepartmentInfoComponent } from './all-department-info.component';

describe('AllDepartmentInfoComponent', () => {
  let component: AllDepartmentInfoComponent;
  let fixture: ComponentFixture<AllDepartmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDepartmentInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDepartmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
