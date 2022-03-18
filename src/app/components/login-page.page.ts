import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  template: `
    <div id="loginQuad" class="text-center bg-dark text-white">
      <h2>Tantalo & co</h2>
      <div class="row justify-content-center">
        <div class="col-6">
          <form #form="ngForm" (ngSubmit)="onlogin(form)">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                ngModel
                name="username"
                class="form-control"
                type="text"
                id="username"
              />
            </div>
            <div class="form-group">
              <label for="pass">Password</label>
              <input
                ngModel
                name="password"
                class="form-control"
                type="password"
                id="password"
              />
            </div>
            <button
              class="btn btn-light m-3"
              [disabled]="false"
              type="submit"
            >
              Entra
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class LoginPagePage implements OnInit {
  form!: NgForm;
  constructor(private authSrv:AuthService) {}

  ngOnInit(): void {}

  onlogin(form: any) {
    this.authSrv.login(form.value);
    console.log(form.value);

  }
}

