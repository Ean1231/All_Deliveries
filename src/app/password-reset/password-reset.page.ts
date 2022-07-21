import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServiceService } from "../service/service.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  constructor(private router: Router,public authService: ServiceService, private alertController: AlertController) { }

  ngOnInit() {
  }

  
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Attention User',
      message:message,
      buttons: [
        {
        text:'Veryfy',
        handler: () => {
          this.router.navigateByUrl('/verify-email')
        //  this.dismiss()
        }
  
      },
      {
        text:'Cancel',
        handler: () => {
          // this.router.navigateByUrl('/verify-email')
         this.alertController.dismiss();
        }
  
      },
    ]
    });
  
    await alert.present();
  
  }

}
