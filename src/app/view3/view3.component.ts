import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css']
})

export class View3Component{

  @Input() deviceXs:boolean | undefined;

}
