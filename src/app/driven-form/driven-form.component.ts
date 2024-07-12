import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrl: './driven-form.component.css'
})
export class DrivenFormComponent implements OnInit {
  constructor() { }
  
  // driven form
  onSubmit(form: NgForm) {
    console.log(form);
  }
  
  // reactive form
  homeform: FormGroup | undefined
  
  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    })
  }

  onSubmit2() {
    console.log(this.homeform);
  }
}
