import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service/service.service";
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-capture-package',
  templateUrl: './capture-package.page.html',
  styleUrls: ['./capture-package.page.scss'],
})
export class CapturePackagePage implements OnInit {
  signupForm: FormGroup;
  displayName: string;
  lastName: any;
  userData: any;
  
  user: Observable<any>;
  constructor(public router: Router, public ngFireAuth: AngularFireAuth, public authService: ServiceService, public firestore: AngularFirestore) { 
    this.user = null; 
    
    this.signupForm = new FormGroup({
      'PackageWidth': new FormControl('', Validators.required),
      'PackageHeight': new FormControl('', Validators.required),
      'DeliveryDescription': new FormControl('', Validators.required),
      'DeliveryRefNo': new FormControl('', Validators.required),
      'DeliveryID': new FormControl('', Validators.required),
      'ClientTitle': new FormControl('', Validators.required),
      'policy': new FormControl('', Validators.required),
      'privacy': new FormControl('', Validators.required),
      'paymentMethod': new FormControl('', Validators.required),
      'ClientName': new FormControl('', Validators.required),
      'EmailAddress': new FormControl('', [Validators.required, Validators.email]),
      'CellphoneNo': new FormControl('', [Validators.required, Validators.pattern("^((\\+27-?)|0)?[0-9]{10}$")]),
      'ClientSurname': new FormControl('',Validators.required, ),
      'id_Number': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{8}$")]),
      'ref_Nr': new FormControl('', Validators.required),
      'PreferredName': new FormControl('', Validators.required),
      'PackageType': new FormControl('', Validators.required),
      'PackageDescription': new FormControl('', Validators.required),
      'cardType': new FormControl('', ),
      'cardName': new FormControl('',),
      'cardNumber': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'cvv': new FormControl('', [ Validators.pattern("^((\\+91-?)|0)?[0-9]{3}$")]),
      'expiryDate': new FormControl(''),
      'terms': new FormControl('', Validators.required)

  });
  
}

    ngOnInit() {
      this.ngFireAuth.authState.subscribe((user) => {
        if (user) {
          let emailLower = user.email.toLowerCase();
          this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
        } else {
       console.log("error")
        }
      }); 

  
  
    }

  
    capturepackage(){
      this.router.navigateByUrl("/capture-package");
  
    }

}
