import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitExamFormComponent } from './submit-exam-form.component';

describe('SubmitExamFormComponent', () => {
  let component: SubmitExamFormComponent;
  let fixture: ComponentFixture<SubmitExamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitExamFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmitExamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
