import { NgModule } from '@angular/core';

import { HeaderComponent } from '../shared/header/header.component';
import { SidebaeComponent } from '../shared/sidebae/sidebae.component';
import { BreadcrubsComponent } from '../shared/breadcrubs/breadcrubs.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
  HeaderComponent,
  SidebaeComponent,
  BreadcrubsComponent,
  NopagefoundComponent
  ],

  exports: [
    HeaderComponent,
    SidebaeComponent,
    BreadcrubsComponent,
    NopagefoundComponent
  ]
})

export class SharedModule { }
