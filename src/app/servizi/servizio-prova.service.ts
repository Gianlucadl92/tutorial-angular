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
}
