import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(elementReference : ElementRef) { this.elementReference = elementReference; }

  @Input('appInputFormat') format = 'lowercase';


  elementReference;

  @HostListener('blur') onBlur() {
    console.log("onBLur");

    if(this.format === 'uppercase')
      this.elementReference.nativeElement.value = this.elementReference.nativeElement.value.toUpperCase();
    else
      this.elementReference.nativeElement.value = this.elementReference.nativeElement.value.toLowerCase();
  }

  @HostListener('focus') onFocus() {
    console.log("onFocus");
  }
  

}
