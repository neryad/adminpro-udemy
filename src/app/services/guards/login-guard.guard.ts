import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(public usuarioServcices: UsuarioService, public router: Router) {}
  canActivate() {
   if ( this.usuarioServcices.estaloguado()) {

    console.log('paso');
    return true;

   } else {
    console.log('blqoeuado');
    this.router.navigate(['/login']);
    return false;
   }


  }

}
