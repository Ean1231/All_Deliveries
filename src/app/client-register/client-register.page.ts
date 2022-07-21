import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';

import { Router } from "@angular/router";
import { ServiceService } from "../service/service.service";
import { user } from '@angular/fire/auth';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

declare var google;
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.page.html',
  styleUrls: ['./client-register.page.scss'],
})
export class ClientRegisterPage implements OnInit {
  phoneNumber: number;
  password: any;
  displayName: any;

  ishidden:boolean = false;
  public shown = false;
  hideMe: boolean;

  isVisible: any;
  isSelected: boolean = true;

  email: any;
  address: string;
  private geoCoder;
  zoom;
  latitude: number;
  longitude: number;
  latitude1: number;
  longitude1: number;
  randomNumberFloor;
  rawRandomNumber;
  randomnumberCeil;
  signupForm: FormGroup;
  @ViewChild('search') public searchElementRef: ElementRef;
  @ViewChild('search1') public search1ElementRef: ElementRef;

  firebaseErrorMessage: string;
  image:any;
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ],
    'phoneNumber': [
      { type: 'required', message: 'phone is required.' },
      { type: 'minlength', message: 'Password must be at least 10 characters long.' }
    ],
    'id_Number': [
      { type: 'required', message: 'phone is required.' },
      { type: 'minlength', message: 'Password must be at least 10 characters long.' }
    ],
    'terms': [
      { type: 'required', message: 'phone is required.' },
      { type: 'minlength', message: 'Password must be at least 10 characters long.' }
    ],
    'cvv': [
      { type: 'required', message: 'phone is required.' },
      { type: 'maxlength', message: 'Password must be at least 10 characters long.' }
    ],


    
  };
  ref_Nr: any;

  constructor(  
    private ngZone: NgZone,  
    public authService: ServiceService, 
    public router: Router,
              private firestore: AngularFirestore,
              public alertController: AlertController,
              public modalCtrl: ModalController,
              private formBuilder: FormBuilder) 
              { 
              var code = "AD-"   ; 
            var lett = this.ref_Nr = this.generatePassword(9);
            var add = code + lett;
            console.log(add, "DISS ADDDDDOO");

            this.ref_Nr = add;
                this.firebaseErrorMessage = '';

                this.pass();

                this.password = this.authService.getRandomInt(1000000000000, 1000000000000000, 100000000000000);
                console.log(this.password, "Register page ")
              }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'paymentMethod': new FormControl('', Validators.required),
      'displayName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', [Validators.required, Validators.pattern("^((\\+27-?)|0)?[0-9]{10}$")]),
      'lastName': new FormControl('',Validators.required, ),
      'id_Number': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{13}$")]),
      'ref_Nr': new FormControl('', Validators.required),
      'title': new FormControl('', Validators.required),
      'nickName': new FormControl('', Validators.required),
      'pick': new FormControl('', Validators.required),
      'drop': new FormControl('', Validators.required),
      // 'paymentMethod': new FormControl('', Validators.required),
      // 'card': new FormControl('', Validators.required),
      // 'cash': new FormControl('', Validators.required),
      'cardType': new FormControl('', ),
      // 'masterCard': new FormControl('', Validators.required),
      'cardName': new FormControl('',),
      'cardNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'cvv': new FormControl('', [ Validators.pattern("^((\\+91-?)|0)?[0-9]{3}$")]),
      'expiryDate': new FormControl(''),
      'terms': new FormControl('', Validators.required)
      // 'decline': new FormControl('', Validators.required)

  });
  }

  
  signup(){
    if (this.signupForm.invalid) 
    return;
    this.authService.RegisterUser(this.signupForm.value)
    .then((result) => {
      if (result == null)    // null is success, false means there was an error
      // this.router.navigate(['/splash']);
      this.authService.SendVerificationMail()
      this.router.navigate(['verify-email']);

      setTimeout(()=>{   
        this.router.navigate(['client-login']);
    }, 10000);
      
      // this.firebaseErrorMessage = result.message;
      // Do something here
      
    }).catch((error) => {
      // this.presentAlert("error");
      window.alert(error.message);

    })
    this.sendEmail(this.email, this.displayName);
}

hide(x) {
if(x == 0) 
document.getElementById('mycode').style.display='block';
else
document.getElementById('mycode').style.display='none';
return;

}



// Address auto complete for pickup address
getAddress(latitude, longitude) {
  this.geoCoder.geocode({ 'position': { lat: latitude, lng: longitude } }, (results, status) => {

    if (status === 'OK') {
      if (results[0]) {
        this.zoom = 12;
        this.address = results[0].formatted_address;
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }

  });
}

// Address auto complete for Drop off address
getAddress1(latitude1, longitude1) {
  this.geoCoder.geocode({ 'position': { lat: latitude1, lng: longitude1 } }, (results, status) => {
    if (status === 'OK') {
      if (results[0]) {
        this.zoom = 12;
        this.address = results[0].formatted_address;
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }

  });
}

          //Random number function
 getRandomNumberBetween(){
  this.rawRandomNumber = Math.random() * 100000;
  this.randomNumberFloor = Math.floor(this.rawRandomNumber);
  this.randomnumberCeil = Math.ceil(this.rawRandomNumber);

  console.log(this.rawRandomNumber ,"Raw Random Nr");
  console.log(this.randomnumberCeil, "Ceil");
  console.log(this.randomNumberFloor, "Floor");

  return;
  
  }

  getRandomInt(min, max, raw) : number{
    raw = Math.random() * 10000000;
    min = Math.ceil(raw);
    max = Math.floor(min);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  
  


async presentAlert(message) {
  const alert = await this.alertController.create({
    header: 'Attention User',
    message:message,
    buttons: [{
      text:'OK',
      handler: () => {
        this.router.navigateByUrl('/client-login')
      //  this.dismiss()
      }

    }]
  });

  await alert.present();

}

//Auto generate password

generatePassword(passwordLength) {
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var allChars = numberChars + upperChars + lowerChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray = randPasswordArray.fill(allChars, 3);
  var referenceNumber = this.shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  return referenceNumber;
}

 shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;

 
}
pass(){
var calculate = this. getRandomInt(1000000000000, 1000000000000000, 100000000000000) ;
console.log(calculate);
}

sendEmail(email, displayName){

  var templateParams = {
    to_name: displayName,
    password: this.generatePassword(12),
    from_name: "macdonaldbosman@gmail.com",
    username: email,
};
 
emailjs.send('service_kug2w28','template_e23m3rp', templateParams, '1RMchPbECF_t2HLD-')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
  }


}
