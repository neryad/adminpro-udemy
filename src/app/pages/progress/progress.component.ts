import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  progreso1: number = 30;
  progreso2: number = 20;
  constructor() { }

  ngOnInit() {
  }
  actuliza(event) {
    console.log(event);
  }

}
