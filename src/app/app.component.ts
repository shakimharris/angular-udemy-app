import { Component } from '@angular/core';

function log (target, name, descriptor){
  console.log(target, name, descriptor);
  // store the original function in a variable
  // manipulate the descriptor.value
  // return the descriptor
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Udemy App';
  @log 
  aSimpleMethod () {
  console.log("Hello!");
  }
}
