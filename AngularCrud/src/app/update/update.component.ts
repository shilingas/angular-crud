import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatIconModule]
})
export class UpdateComponent {
  test: string = "labas"
  id!: string;
  currentPerson!: Person;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route = route;
  }
  ngOnInit() {
    this.route.params.subscribe(x => {
      this.id = x['id']
    })
    this.http.get<Person>(`https://angular-crud-e84e3-default-rtdb.firebaseio.com/users/${this.id}.json`).subscribe(x => {
      this.currentPerson = x;
    });
  }
  update(form: NgForm) {
    this.http.put(`https://angular-crud-e84e3-default-rtdb.firebaseio.com/users/${this.id}.json`, this.currentPerson).subscribe(x => {
      console.log('updated');
    })
    form.reset();
  }
}
