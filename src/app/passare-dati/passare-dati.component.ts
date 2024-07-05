import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-passare-dati',
  templateUrl: './passare-dati.component.html',
  styleUrl: './passare-dati.component.css',
})
export class PassareDatiComponent implements OnInit, OnChanges {
  // passare dati dal parent al child
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  // passare dati dal child al parent
  @Output() mandaDatiEvento = new EventEmitter<string>();

  nome = "Luca"
  mandaDati() {
    this.mandaDatiEvento.emit(this.nome)
  }
}
