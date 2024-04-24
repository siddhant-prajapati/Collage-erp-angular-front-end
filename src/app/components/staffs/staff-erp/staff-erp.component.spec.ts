import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffErpComponent } from './staff-erp.component';

describe('StaffErpComponent', () => {
  let component: StaffErpComponent;
  let fixture: ComponentFixture<StaffErpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffErpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
