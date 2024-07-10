import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent implements OnInit {
  persone: any

  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone()
  }
}
