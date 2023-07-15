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
  apiData!: Person[];
  constructor(private service: DataService, private http: HttpClient) {
    this.service = service;
    this.http = http;
  }
  ngOnInit(): void {
    console.log('test');
    this.currentData = this.service.getData();
    this.http.get<Person[]>(`https://angular-crud-e84e3-default-rtdb.firebaseio.com/users.json`).subscribe(x => {
      this.apiData = x;
      console.log(x);
    });
  }
}
