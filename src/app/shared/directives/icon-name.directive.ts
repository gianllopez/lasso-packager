import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[iconName]' })
export class IconNameDirective {

  @Input('iconName') action!: string;

  element!: HTMLImageElement;

  constructor(el: ElementRef) { this.element = el.nativeElement };

  getIcon = (icon: string) => `../../../../../assets/icons/actions/${icon}.svg`;

  @HostListener('mouseenter')
  onHover() { this.element.src = this.getIcon(`${this.action}-hover`) };

  @HostListener('mouseleave')
  onHoverLeave() { this.element.src = this.getIcon(this.action) };

};
