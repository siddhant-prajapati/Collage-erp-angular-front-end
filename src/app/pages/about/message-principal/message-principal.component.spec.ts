import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePrincipalComponent } from './message-principal.component';

describe('MessagePrincipalComponent', () => {
  let component: MessagePrincipalComponent;
  let fixture: ComponentFixture<MessagePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagePrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
