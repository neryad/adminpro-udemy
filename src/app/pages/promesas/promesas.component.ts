import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {
    let promesas = new Promise( (resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
       contador += 1;
       console.log(contador);
       if ( contador === 3 ) {
         resolve();
         clearInterval(intervalo);
       }
      }, 1000 );
    });

    promesas.then(
      () => console.log('Termino')
      )
      .catch(error => console.error('error en la promesa', error)
      );
  }

  ngOnInit() {
  }

}
