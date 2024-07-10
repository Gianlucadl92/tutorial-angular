import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  persone = [
    {nome: "Maria", cognome: "Rossi"},
    {nome: "Piero", cognome: "Verdi"},
    {nome: "Giovanni", cognome: "Gialli"},
  ]

  constructor() { }

  getPersone() {
    return this.persone
  }

  getPersona(index: number) {
    return this.persone[index];
  }
}
