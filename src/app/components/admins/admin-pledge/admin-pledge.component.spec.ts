import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPledgeComponent } from './admin-pledge.component';

describe('AdminPledgeComponent', () => {
  let component: AdminPledgeComponent;
  let fixture: ComponentFixture<AdminPledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPledgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
