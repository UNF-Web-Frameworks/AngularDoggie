import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { DogkeeperService } from '../services/dogkeeper.service';

@Directive({
  selector: '[appRandomSelection]'
})
export class RandomSelectionDirective {
  @Input() appRandomSelection:number=0;
  constructor(private el:ElementRef<HTMLDivElement>,private dogSvc:DogkeeperService, private renderer:Renderer2) { 
    this.dogSvc.Select.subscribe((data)=>{
      if(data===this.appRandomSelection)
      {
        this.el.nativeElement.innerHTML='Selected';
        
      }
      else
      {
        this.el.nativeElement.innerHTML='';
      }
    })
  }

}
