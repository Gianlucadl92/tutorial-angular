import { Component, Input, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css',
})
export class ContattoComponent implements OnInit {
  id: number | undefined;
  persona: any;

  constructor(
    private route: ActivatedRoute,
    private servizioProva: ServizioProvaService
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.id = +params.get('id');
    //   this.persona = this.servizioProva.getPersona(this.id);
    // });
  }
}
