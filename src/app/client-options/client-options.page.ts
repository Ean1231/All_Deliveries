import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-options',
  templateUrl: './client-options.page.html',
  styleUrls: ['./client-options.page.scss'],
})
export class ClientOptionsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  Register(){
    this.router.navigateByUrl("/client-register");

  }

  Login(){
    this.router.navigateByUrl("/client-login");

  }


}
