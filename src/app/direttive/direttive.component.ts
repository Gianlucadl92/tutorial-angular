import { Component } from '@angular/core';

@Component({
  selector: 'app-direttive',
  templateUrl: './direttive.component.html',
  styleUrl: './direttive.component.css'
})
export class DirettiveComponent {
  // ngIf
  isVisible = true;

  // ngFor
  persone = [
    {nome: "mario", cognome: "verdi", isOnline: true},
    {nome: "marco", cognome: "verdi", isOnline: false},
    {nome: "luca", cognome: "verdi", isOnline: true},
  ]

  // ngSwitch
  numero = 1

  // ngStyle


}
