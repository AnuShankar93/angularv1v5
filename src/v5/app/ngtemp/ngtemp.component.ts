import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemp',
  templateUrl: './ngtemp.component.html',
  styleUrls: ['./ngtemp.component.css']
})
export class NgtempComponent implements OnInit {

  allValues = [
    {name : 'A', age: '22'},
    {name : 'B', age: '23'},
    {name : 'C', age: '24'},
    {name : 'D', age: '25'},
    {name : 'E', age: '26'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
