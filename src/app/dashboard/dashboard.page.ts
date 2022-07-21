import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor( public authService: ServiceService) { }

  ngOnInit() {
  }

}
