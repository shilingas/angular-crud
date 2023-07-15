import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  events: string[] = [];
  opened!: boolean;
}
