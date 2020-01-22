import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrubs',
  templateUrl: './breadcrubs.component.html',
  styleUrls: ['./breadcrubs.component.css']
})
export class BreadcrubsComponent implements OnInit {
titutlo: string;
  constructor(private router: Router, private title: Title, private meta: Meta) {

    this.getDataRoute().subscribe(data => {
      this.titutlo = data.titulo;
      this.title.setTitle (data.titulo);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titutlo
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }
  getDataRoute() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data )
    );
  }
}
