import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
menu: any = [
  {
    titulo: 'Principal',
    icono: 'mdi mid-gauge',
    submenu: [
      {
        titulo: 'Dashboard',
        url: '/dashboard'
      },
      {
        titulo: 'Progressbar',
        url: '/progress'
      },
      {
        titulo: 'Graficas',
        url: '/grafica1'
      },
    ]
  }
];
  constructor() { }
}
