import { Component } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email = "macdonaldbosman@gmail.com"

  constructor(private emailComposer: EmailComposer) {}

  sendEmail(){
    const templateParams = {
      name: 'Ean',
      notes: 'Check this out!',
      email: 'email',
      message: "Holllllla"
  };
  
  emailjs.send('service_kug2w28','template_e23m3rp', templateParams, '1RMchPbECF_t2HLD-')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
  }

  sennd(){
    emailjs.send("service_kug2w28","template_e23m3rp",{
      to_name: "fvgh",
      message: "ghj",
      password: "ghj",
      email: "ghj",
      from_name: "vghj",
      reply_to: "vghj",
      });
  }


 



  sendEmeail(){
    let email = {
      to: 'macdonaldbosman@gmail.com',
      cc: 'macdonaldbosman@gmail.cmo',
      bcc: ['benitas@gmail.com', 'enoah04@gmail.com'],
      // attachments: [
      //   'file://img/logo.png',
      //   'res://icon.png',
      //   'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      //   'file://README.pdf'
      // ],
      subject: 'All Deliveries App',
      body: 'How are you? Nice greetings from Kimberley',
      isHtml: true
    }
    
    // Send a text message using default options
    this.emailComposer.open(email);
  }

}
