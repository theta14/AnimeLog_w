import { Component, OnInit } from '@angular/core';
import { Tva } from 'src/app/models/tva';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  demo: string;

  constructor() { }

  ngOnInit() {
    let a = [ 3, 2, 5, 1, 4 ];
    a.sort((a, b) => {
      // console.log(a + ', ' + b);
      return a - b;
    });
    console.log(a);
  }

}
