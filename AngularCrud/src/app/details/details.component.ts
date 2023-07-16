import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  id$!: Observable<number>
  id!: string;
  currentPerson!: Person;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route = route;
  }
  ngOnInit() {
   this.id$ =this.route.params.pipe(
      map(x => x['id'])
    )
    this.route.params.subscribe(x => {
      this.id = x['id'];
    })
    this.http.get<Person>(`https://angular-crud-e84e3-default-rtdb.firebaseio.com/users/${this.id}.json`).subscribe(x => {
      this.currentPerson = x;
    });
  }
}
