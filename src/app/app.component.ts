import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  records = [
    {
      name: 'Shakim',
      address: '176 John Daly'
    },
      {
      name: 'Kristina', 
      address: '165 Vincent'
    },
      {
      name: 'Rihanna',
      address: false
    }
  ]
}