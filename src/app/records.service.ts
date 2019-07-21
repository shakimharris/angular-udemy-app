import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient]) { }

  getData() {
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
