import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-barrasu',
  templateUrl: './barrasu.component.html',
  styleUrls: ['./barrasu.component.css']
})
export class BarrasuComponent {


  constructor(
    private userService: UserService,
    private router: Router
  ) { }


  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/inicio']);
      })
      .catch(error => console.log(error));
  }


  
}
