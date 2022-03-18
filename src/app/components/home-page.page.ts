import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1 class="text-center text-danger">
      Benvenuti nella mia crm !!
    </h1>

    <img src="http://www.gestionefatturaelettronica.com/images/logo_fattura_elettronica.svg" class="img-fluid rounded mx-auto d-block pt-5" alt="...">
  `,
  styles: [
  ]
})
export class HomePagePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
