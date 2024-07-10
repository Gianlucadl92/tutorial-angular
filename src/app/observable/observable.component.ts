// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { interval, Observable } from 'rxjs';

// @Component({
//   selector: 'app-observable',
//   templateUrl: './observable.component.html',
//   styleUrl: './observable.component.css'
// })
// export class ObservableComponent implements OnInit, OnDestroy {
//   ngOnInit(): void {
//     // l'nterval si interrompe quando lascio la pagina
    
//     sottoscrizione: any
//     this.sottoscrizione = interval(1000).subscribe(numero => {
//       console.log(numero);
//     })
//     ngOnDestroy(): void {
//       this.sottoscrizione.unsubscribe()
//     }
//   }

// }
