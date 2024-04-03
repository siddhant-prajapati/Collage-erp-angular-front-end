import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTextComponent } from './default-text.component';

describe('DefaultTextComponent', () => {
  let component: DefaultTextComponent;
  let fixture: ComponentFixture<DefaultTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
