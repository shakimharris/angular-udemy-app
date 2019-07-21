import { Component } from '@angular/core';

function log (target, name, descriptor){
  console.log(target, name, descriptor);
  // store the original function in a variable
  // manipulate the descriptor.value
  // return the descriptor

  const original = descriptor.value
  // manipulate the descriptor.value completed

  descriptor.value = function (args: any){
    console.log("Arguments", args, "were passed in this function!");
    const result = original.apply(this, args);
    console.log("The results of the function are" , result);
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
  myVariable= 'Udemy App';

  constructor(){
    console.log("This statement was created by the constructor method", this.aSimpleMethod(5));
  }

  @log
  aSimpleMethod (a) {
  return a*a;
  }
}
