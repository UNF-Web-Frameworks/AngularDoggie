import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppendHtml]'
})
export class AppendHtmlDirective {
  @Input() appAppendHtml='';
  constructor(private el:ElementRef<HTMLDivElement>,private renderer:Renderer2) { 
    
    
  }

  ngOnInit(): void {
    this.el.nativeElement.innerHTML=this.appAppendHtml;//insertAdjacentHTML('beforeend',this.appAppendHtml);
    
  }

}
