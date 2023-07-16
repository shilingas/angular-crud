import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Person[] = []

  addPerson(person: Person) {
    this.data.push(person);
  }
  getData(): Person[] {
    return this.data;
  }

  constructor() { }
}
