import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cverify',
  templateUrl: './cverify.page.html',
  styleUrls: ['./cverify.page.scss'],
})
export class CverifyPage implements OnInit {

  constructor(public authService: ServiceService, public router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl("/contractor-login");
  }
}
