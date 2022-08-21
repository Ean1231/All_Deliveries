import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contractor-options',
  templateUrl: './contractor-options.page.html',
  styleUrls: ['./contractor-options.page.scss'],
})
export class ContractorOptionsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  Register(){
    this.router.navigateByUrl("/contractor-register");

  }

  Login(){
    this.router.navigateByUrl("/contractor-login");

  }

}
