import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  currentData: Person[] = [];
  isEmpty: boolean = false;
  id!: number;
  apiData!: Person[];
  newArray!: Person[];
  keys!: string[]
  constructor(private service: DataService, private http: HttpClient) {
    this.service = service;
    this.http = http;
  }
  ngOnInit(): void {
    console.log('test');
    this.currentData = this.service.getData();
    this.http.get<Person[]>(`https://angular-crud-e84e3-default-rtdb.firebaseio.com/users.json`).subscribe(x => {
      this.apiData = x;
      const arrayOfObjects = Object.values(this.apiData);
      this.newArray = arrayOfObjects;
      this.keys = Object.keys(this.apiData);
    });
  }
  removeItem(i: number): void {
    console.log(i);

    this.http.delete(`https://angular-crud-e84e3-default-rtdb.firebaseio.com/users/${this.keys[i]}.json`).subscribe(x => {
      this.http.get<Person[]>(`https://angular-crud-e84e3-default-rtdb.firebaseio.com/users.json`).subscribe(x => {
        this.apiData = x;
        if (Object.values(this.apiData) != null) {
          const arrayOfObjects = Object.values(this.apiData);
          if (arrayOfObjects != null)
            this.newArray = arrayOfObjects;
          if (this.newArray.length === 0)
            this.isEmpty = true;
        }

      })
    })
  }
}
