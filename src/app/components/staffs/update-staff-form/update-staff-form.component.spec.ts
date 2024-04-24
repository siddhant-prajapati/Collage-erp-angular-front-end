import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStaffFormComponent } from './update-staff-form.component';

describe('UpdateStaffFormComponent', () => {
  let component: UpdateStaffFormComponent;
  let fixture: ComponentFixture<UpdateStaffFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateStaffFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateStaffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
