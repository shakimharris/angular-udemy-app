import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData (){
    return [
      {
        name: 'Shakim',
        address: '176 John Daly'
      },
        {
        name: 'Kristina', 
        address: '165 Vincent'
      },
      {
        name: 'Shakim',
        address: '176 John Daly'
      },
        {
        name: 'Kristina', 
        address: '165 Vincent'
      },
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
}
