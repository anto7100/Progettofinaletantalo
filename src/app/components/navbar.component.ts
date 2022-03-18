import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthGuardGuard } from '../_guard/auth-guard.guard';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">Gestione Fatture</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a
              class="nav-link"
              [routerLink]="['login']"
              routerLinkActive="router-link-active"
              [hidden]="this.authSrv.loggedIn()"
              >Login</a
            >
            <a
              class="nav-link"
              [routerLink]="['signup']"
              routerLinkActive="router-link-active"
              [hidden]="this.authSrv.loggedIn()"
              >Sign Up</a
            >
            <a
              class="nav-link"
              [routerLink]="['fatture']"
              routerLinkActive="router-link-active"
              >Fatture</a
            >
            <a
              class="nav-link"
              [routerLink]="['clienti']"
              routerLinkActive="router-link-active"
              >Clienti</a
            >
            <a
              class="nav-link"
              [routerLink]="['users']"
              routerLinkActive="router-link-active"
              >Users</a
            >
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <a
            class="nav-link btn btn-danger text-white"
            (click)="onlogOut()"
            [hidden]="!this.authSrv.loggedIn()"
            >Logout</a
          >
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthGuardGuard, public authSrv: AuthService) {}
  ngOnInit(): void {}

  onlogOut() {
    if (this.authSrv.loggedIn()) {
      this.authSrv.logOut();
    } else {
      alert('Non hai ancora effettuato il login!');
    }
  }
}
