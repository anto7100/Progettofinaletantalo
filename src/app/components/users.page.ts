import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/user';
import { UserService } from '../services/user.service';


@Component({
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Ruoli</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let user of users">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td><span class="btn" *ngFor="let ruolo of user.roles">{{ruolo.roleName}}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class UsersPage implements OnInit {
 users!:Array<Users>;


  constructor(private usrSrv:UserService) { }


  ngOnInit(): void {
      this.usrSrv.getAll().subscribe(res=>{
      this.users = res.content;
    })
  }

}
