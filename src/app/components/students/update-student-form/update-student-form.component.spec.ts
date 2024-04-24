import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentFormComponent } from './update-student-form.component';

describe('UpdateStudentFormComponent', () => {
  let component: UpdateStudentFormComponent;
  let fixture: ComponentFixture<UpdateStudentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateStudentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
