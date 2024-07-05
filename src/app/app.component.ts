import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tutorial-angular';

  // passare dati dal parent al child
  persone = [
    { nome: 'mario', cognome: 'verdi', isOnline: true },
    { nome: 'marco', cognome: 'verdi', isOnline: false },
    { nome: 'luca', cognome: 'verdi', isOnline: true },
  ];

  onClick() {
    this.persone = [
      { nome: 'pippo', cognome: 'verdi', isOnline: true },
      { nome: 'mimmo', cognome: 'verdi', isOnline: false },
      { nome: 'pino', cognome: 'verdi', isOnline: true },
    ];
  }

  // passare dati dal child al parent
  onRiceviDati(value: string) {
    console.log(value);
    
  }
}
