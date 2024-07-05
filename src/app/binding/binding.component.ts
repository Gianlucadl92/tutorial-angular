import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
})
export class BindingComponent {
  cani = [
    {
      nome: 'roger',
      razza: 'golden',
      descrizione: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Porro, officiis doloremque quia quo itaque est nulla ab mollitia perspiciatis repellendus!`,
    },
    {
      nome: 'pluto',
      razza: 'pitbull',
      descrizione: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Porro, officiis doloremque quia quo itaque est nulla ab mollitia perspiciatis repellendus!`,
    },
  ];

  // property binding
  isDisabled = true;
  
  // event binding
  onClick() {
    console.log("Bottone Cliccato");
    
  }

  onInput(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
  }

  //2 way binding
  title = "Angular"

  onClick2(event: Event) {
    this.title = "ho cliccato sul bottone"
  }

}
