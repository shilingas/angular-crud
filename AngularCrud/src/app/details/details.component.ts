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
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route = route;
  }
  ngOnInit() {
   this.id$ =this.route.params.pipe(
      map(x => x['id'])
    )
    this.http.get<Person>(`https://angular-crud-e84e3-default-rtdb.firebaseio.com/users.json/${this.id$}`).subscribe(x => console.log(x));
  }
}
