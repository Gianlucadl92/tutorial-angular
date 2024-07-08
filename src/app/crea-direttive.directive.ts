import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCreaDirettive]',
})
export class CreaDirettiveDirective {
  @Input() appCreaDirettive = ""
  @Input() defaultColor = ""

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.cambiaColore(this.appCreaDirettive || this.defaultColor || "purple" )
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cambiaColore('trasparent')
  }

  cambiaColore(colore: string) {
    this.element.nativeElement.style.backgroundColor = colore;
  }
}
