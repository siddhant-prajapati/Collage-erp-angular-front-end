import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageChairmanComponent } from './message-chairman.component';

describe('MessageChairmanComponent', () => {
  let component: MessageChairmanComponent;
  let fixture: ComponentFixture<MessageChairmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageChairmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageChairmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
