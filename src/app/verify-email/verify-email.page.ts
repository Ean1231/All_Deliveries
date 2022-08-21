import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor(public authService: ServiceService, public router: Router) { }

  ngOnInit() {
    
  }
  login(){
    this.router.navigateByUrl("/client-login");
  }

}
