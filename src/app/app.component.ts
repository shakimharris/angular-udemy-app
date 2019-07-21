import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myVariable= 'Udemy App';


  constructor() {
    this.myVariable=""
    setInterval(() => {
    this.myVariable = Math.random().toString()
    }, 500)
  }
}
