import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebae',
  templateUrl: './sidebae.component.html',
  styleUrls: ['./sidebae.component.css']
})
export class SidebaeComponent implements OnInit {

  constructor(public sidebarServices: SidebarService) { }

  ngOnInit() {
  }

}
