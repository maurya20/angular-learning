
//
import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';



import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @ViewChild('grid') grid!: MatGridList;

  gridByBreakpoint:any = {
    xl: 8,
    lg: 4,
    md: 4,
    sm: 2,
    xs: 1
  }

  constructor() {}
ngOnInit(){
  
}

}