import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../servizi/servizio-prova.service';

@Component({
  selector: 'app-service-prova',
  templateUrl: './service-prova.component.html',
  styleUrl: './service-prova.component.css'
})
export class ServiceProvaComponent implements OnInit {
  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    console.log(this.servizioProva.persone);
  }
}
