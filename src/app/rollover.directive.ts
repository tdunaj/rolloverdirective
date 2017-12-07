import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRollover]'
})
export class RolloverDirective {
  @Input('appRollover') config: {
    'initial': 'https://unsplash.it/200/300?image=201',
    'over': ''
  };
  @HostBinding('src') private imagePath: string;

  ngOnChanges() {
    if (this.config.initial) {
      this.imagePath = this.config.initial;
    }
  }

  //constructor(private el: ElementRef, private renderer: Renderer) {}

  @HostListener('mouseover') onMouseOver(){
   this.imagePath = this.config.over;
  }

  @HostListener('mouseout') onMouseOut(){
    this.imagePath = this.config.initial;
  }  
}
