import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  countChild: Number = 0;

  ngOnInit(){

  }

  // ngOnChanges(changes: SimpleChange ): void{
  //   console.log("OnChange: " + JSON.stringify(changes));
    
  // }
}
