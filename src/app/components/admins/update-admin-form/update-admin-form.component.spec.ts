import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminFormComponent } from './update-admin-form.component';

describe('UpdateAdminFormComponent', () => {
  let component: UpdateAdminFormComponent;
  let fixture: ComponentFixture<UpdateAdminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAdminFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
