import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3400/file.php')
    .subscribe(data => {
      console.log('We got', data);
    });
  }
}
