import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightBackground]',
})
export class HighlightBackgroundDirective {
  hasHighlight: boolean;

  @HostListener('click') onTextClick() {
    this.highlightElement();
  }

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'rgb(209, 231, 245)';
  } // un element separat care descrie elementul html

  highlightElement(): void {
    if (this.hasHighlight) {
      this.elementRef.nativeElement.style.backgroundColor = null;
    } else {
      this.elementRef.nativeElement.style.backgroundColor =
        'rgb(209, 231, 245)';
    }
    this.hasHighlight = !this.hasHighlight;
  }
}
