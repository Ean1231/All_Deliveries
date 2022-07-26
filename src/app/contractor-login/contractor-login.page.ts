import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from "../service/service.service";
import { AlertController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-contractor-login',
  templateUrl: './contractor-login.page.html',
  styleUrls: ['./contractor-login.page.scss'],
})
export class ContractorLoginPage implements OnInit {

  displayName;
  constructor(public alertController: AlertController, private popoverController: PopoverController ,public authService: ServiceService, public router: Router) { }

  ngOnInit() {

  }

  logIn(mail, pass) {
    this.authService.SignContractorIn(mail.value, pass.value)
      .then(() => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['cdashboard']);          
        } else {
          // this.presentAlert("Email not verified, Please check your email");
          console.log("verify")
          return false;
        }
      }).catch((error) => {
        
        window.alert(error.message)
      })
  }

  userinto(){
this.displayName;
  }

  // async settingsPopover(ev: any) {
  //   const siteInfo = { id: 1, name: 'edupala' };
  //   const popover = await this.popoverController.create({
  //     backdropDismiss: false,
  //     showBackdrop: true,
  //     component: SplashComponent,
  //     event: ev,
  //     cssClass: 'popover_setting',
  //     componentProps: {
  //       site: siteInfo
  //     },
  //     translucent: true
  //   });

  //   popover.onDidDismiss().then((result) => {
  //     console.log(result.data);
  //   });

  //   return await popover.present();
  //   /** Sync event from popover component */

  // }

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



function ev(ev: any) {
  throw new Error('Function not implemented.');


}
