import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBasicDirective]'
})
export class BasicDirectiveDirective {
  @Input() defaultBgColor: string = 'transparent';
  @Input() HighlightBgColor: string = 'blue';
  @Input() defaultTextColor: string = '#333';
  @Input() HighlightTextColor: string = '#fff';
  @HostBinding('style.backgroundColor') backgroundColor: string ;
  @HostBinding('style.color') color: string;

  constructor(private render: Renderer2,  private elRef: ElementRef) {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultBgColor;
    this.color = this.defaultTextColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.render.setStyle(this.elRef.nativeElement, 'color', '#fff');
    this.backgroundColor = this.HighlightBgColor;
    this.color = this.HighlightTextColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.render.setStyle(this.elRef.nativeElement, 'color', '#333');
    this.backgroundColor = this.defaultBgColor;
    this.color = this.defaultTextColor;
  }

}
