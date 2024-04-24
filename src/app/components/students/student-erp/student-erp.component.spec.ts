import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentErpComponent } from './student-erp.component';

describe('StudentErpComponent', () => {
  let component: StudentErpComponent;
  let fixture: ComponentFixture<StudentErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentErpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
