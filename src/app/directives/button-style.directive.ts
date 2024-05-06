import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appButtonStyle]',
  standalone: true
})
export class ButtonStyleDirective implements OnChanges{

  @Input()
  appButtonStyle !: string;
  constructor(private elementRef : ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.elementRef.nativeElement.style);
    this.elementRef.nativeElement.style.backgroundColor = this.appButtonStyle;
    this.elementRef.nativeElement.style.borderRadius = '10px';
    this.elementRef.nativeElement.style.borderColor = this.appButtonStyle;
    this.elementRef.nativeElement.style.fontWeight = 'bold';
    this.elementRef.nativeElement.style.color = 'white';
  }

}
