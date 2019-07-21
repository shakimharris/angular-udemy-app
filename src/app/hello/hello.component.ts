import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myVariable = "Shakim";
  bitwiseOR = 2 | 5 // 010 101 => 0 | 1 = 1 then 1 |0 is 1 |  then 0 | 1 = 1; 111

  i=0;

  constructor() {
  }

  dosomeHeavyTask(){
    console.log(`Called ${this.i++} + times`)
  }
  
  ngOnInit() {
  }

}
