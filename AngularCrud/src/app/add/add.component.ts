import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgForm } from "@angular/forms"
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule]
})
export class AddComponent {
  constructor(private service: DataService, private http: HttpClient)
  {
    this.service = service;
    this.http = http;
  }
  name!: string;
  email!: string;
  newPerson!: Person;
  addPerson(form: NgForm): void {
    this.newPerson = {
      ...this.newPerson,
      name: form.value.name,
      email: form.value.email,
    }
    this.service.addPerson(this.newPerson);
    form.reset();
    this.http.post('https://angular-crud-e84e3-default-rtdb.firebaseio.com/users.json', this.newPerson).subscribe(x => console.log('added'));
  }

}
