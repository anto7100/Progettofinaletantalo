import { Component, OnInit,Input } from '@angular/core';
import { FatturaService } from '../services/fattura.service';
import { Router } from '@angular/router';
@Component({
  template: `
    <div class="container mt-5 ">
      <div class="row">
        <div class="col-4 mt-3" *ngFor="let fattura of fatture">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{{ fattura.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {{ fattura.cliente.ragioneSociale }}
              </h6>
              <p class="card-text">Importo: {{ fattura.importo }} €</p>
              <p class="card-text">Stato Fattura : {{ fattura.stato.nome }}</p>
              <p class="card-text">ID unico: {{ fattura.id }}</p>
              <p class="card-text">
                Data : {{ fattura.data | date: 'd/M/yy, h:mm a' }}
              </p>
              <a [routerLink]="['/dettaglifattura/',fattura.id]" routerLinkActive="router-link-active"  class="btn btn-success btn-sm"
                >Dettagli Fattura</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container d-flex">
       <app-pagination></app-pagination>
     </div>
  `,
  styles: [],
})
export class FatturePage implements OnInit {
  constructor(private fatturaSrv: FatturaService, private router: Router) {}
  fatture: any;
  numPag!: any;
  p: number = 0;
  k!: number;
  ngOnInit(): void {
    this.fatturaSrv.getByPage(this.p).subscribe((res) => {
      this.fatture = res.content;
      this.p = Number(res.pageable.pageNumber);
      console.log(res.pageable);
      const numeroPag = Array(res.totalPages);
      this.numPag = numeroPag;
    });
  }
  caricaPag(k: number) {
    this.fatturaSrv.getByPage(k).subscribe((res) => {
      this.fatture = res.content;
      this.p = k;
    });
  }

  caricaprevPag(k: number) {
    if (this.p == 0) {
      this.caricaPag(k);
      return;
    } else {
      --k;
      this.caricaPag(k);
      return;
    }
  }

  caricanextPag(k: number) {
    if (this.p == 4) {
      this.caricaPag(k);
      return;
    } else {
      ++k;
      this.caricaPag(k);
      return;
    }
  }
  @Input() item = '';
}
