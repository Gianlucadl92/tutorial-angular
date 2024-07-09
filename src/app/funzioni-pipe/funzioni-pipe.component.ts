import { Component } from '@angular/core';

@Component({
  selector: 'app-funzioni-pipe',
  templateUrl: './funzioni-pipe.component.html',
  styleUrl: './funzioni-pipe.component.css'
})
export class FunzioniPipeComponent {
  title = "corso-angular"
  oggi = Date.now()
  numero = 5
}
