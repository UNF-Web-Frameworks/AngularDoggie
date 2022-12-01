import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-html-play',
  templateUrl: './html-play.component.html',
  styleUrls: ['./html-play.component.css']
})
export class HtmlPlayComponent implements OnInit {
  @ViewChild('larry') larryDiv: HTMLDivElement|undefined;
  constructor() { }
  moreHtml="<h1>Hello World!</h1>";
  ngOnInit(): void {
    /*if(this.larryDiv)
    {
      this.larryDiv.innerHTML=this.moreHtml;
    }*/
  }

}
