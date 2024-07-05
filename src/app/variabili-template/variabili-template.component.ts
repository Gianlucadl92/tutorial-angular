import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-variabili-template',
  templateUrl: './variabili-template.component.html',
  styleUrl: './variabili-template.component.css'
})
export class VariabiliTemplateComponent implements OnInit, AfterViewInit {
  // variabili template
  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>;

  persone = [
    {nome: "luca", cognome: "rossi"},
    {nome: "mario", cognome: "rossi"},
    {nome: "anna", cognome: "rossi"},
  ]

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.inputSaluti);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.inputSaluti);
  }

  onClick() {
    console.log(this.inputSaluti.nativeElement.value);
  }

}
