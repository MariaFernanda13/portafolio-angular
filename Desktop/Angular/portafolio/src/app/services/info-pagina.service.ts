import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

   }

   private cargarInfo() {

    // Leer archivo json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      this.cargada = true;

      // Asignar los valores de la respuesta a la variable info
      this.info = resp;

      // console.log(resp);
    });
   }

   private cargarEquipo() {

    // Leer archivo JSON
    this.http.get('https://angular-html-f6dc9.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      // Asignar los valores de la respuesta a la variable equipo
      this.equipo = resp;

      // console.log(resp);
    });
   }
}
