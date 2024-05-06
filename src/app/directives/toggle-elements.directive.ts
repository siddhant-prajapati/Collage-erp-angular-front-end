import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appToggleElements]',
  standalone: true
})
export class ToggleElementsDirective implements OnChanges {

  @Input({ required : true})
  appToggleElements !: boolean;

  constructor(private templateRef : TemplateRef<any> , private viewContainerRef : ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.appToggleElements){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear()
    }
  }

}
