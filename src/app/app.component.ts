import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myVariable= 'Udemy App';
  mydisabledValue= false;


  constructor() {
    this.myVariable=""
    this.mydisabledValue = false;
    setInterval(() => {
    this.myVariable = Math.random().toString()
    }, 500)
    this.mydisabledValue = Math.random() > 0.5 ;
    myFunction(){
      console.log("You called me again!");
    }
  }
}
