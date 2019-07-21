import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myVariable= 'Udemy App';
this.myVariable = ""

  constructor() {
    setInterval(() => {
    this.myVariable = Math.random.toString();
    
    }, 500)
  }
}
