import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

forma: FormGroup;

  constructor( private ussuarioService: UsuarioService, private router: Router) { }

  // sonIguales(campo1: string, campo2: string ) {

  //   return (group: FormGroup) => {

  //     let pass1 = group.controls[campo1].value;
  //     let pass2 = group.controls[campo2].value;

  //     if(pass1 === pass2 ) {
  //       return null;
  //     }
  //     return {
  //       sonIguales: true
  //     };
  //   };
  // }
   sonIguales(fGroup: FormControl) {
    return fGroup.get('password').value === fGroup.get('password2').value ? null : {sonIguales: true};
  }
  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
    nombre: new FormControl(null, Validators.required),
    correo: new FormControl(null, [ Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
    password2: new FormControl(null, Validators.required),
    condiciones: new FormControl(false),
    },
    this.sonIguales
    );
    this.forma.setValue({
      nombre: 'Test',
      correo: 'test@gmail.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }

  registrarUsuario() {
    if ( this.forma.invalid) {
      return;
    }

    if ( !this.forma.value.condiciones ) {

      return;
    }

    const usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );

    this.ussuarioService.crearUsuario(usuario).subscribe( res => {
      console.log(res);
      this.router.navigate(['/login']);

    });



  }

}
