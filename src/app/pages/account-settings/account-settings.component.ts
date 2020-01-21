import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingService: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarThema( tema: string, link: any) {

    this.aplicarcheck(link);
    this.settingService.aplicarTema(tema);

  }

  aplicarcheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for ( const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const  tema = this.settingService.ajustes.tema;
    for ( const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
