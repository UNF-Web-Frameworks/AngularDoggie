import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DogkeeperService } from '../services/dogkeeper.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight='';

  constructor(private el:ElementRef,private dogSvc:DogkeeperService) { 

    
    this.dogSvc.XClusive.subscribe((data)=>{
      this.appHighlight=data;
    })
  }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.el.nativeElement.style.backgroundColor =this.appHighlight;
  }

  @HostListener('mouseleave') onMouseLeave ()
  {
    this.el.nativeElement.style.backgroundColor ='';
  }

}
