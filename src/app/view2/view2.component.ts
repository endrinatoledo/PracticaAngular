import { Component, Input,OnInit } from '@angular/core';


@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component {

  @Input() deviceXs:boolean | undefined;
  @Input() deviceSm:boolean | undefined;
  

}
