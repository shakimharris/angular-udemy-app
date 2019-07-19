import { Component } from '@angular/core';

function log (target, name, descriptor){
  console.log(target, name, descriptor);
  // store the original function in a variable
  // manipulate the descriptor.value
  // return the descriptor

  const original = descriptor.value
  // manipulate the descriptor.value completed

  descriptor.value = function (...args){
    console.log("Arguments", args, "were passed in this function!");
    const result = original(args)
  };

  descriptor.value = function () {
    console.log("This function was hacked!");
  }
  return descriptor;
  // descriptor returned here
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Udemy App';

  constructor(){
    this.aSimpleMethod
  }

  @log
  aSimpleMethod () {
  console.log("Hello!");
  }
}
