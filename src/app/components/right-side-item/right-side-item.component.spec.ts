import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideItemComponent } from './right-side-item.component';

describe('RightSideItemComponent', () => {
  let component: RightSideItemComponent;
  let fixture: ComponentFixture<RightSideItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightSideItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightSideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
