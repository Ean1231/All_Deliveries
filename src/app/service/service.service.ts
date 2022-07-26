import { Injectable, NgZone } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  user
} from '@angular/fire/auth';
import { Firestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';

import { Router } from '@angular/router';
import { updatePhoneNumber } from 'firebase/auth';
import { AlertController } from '@ionic/angular';

export interface User {
  // uid: any;
  id: any;
  email: string;
  displayName: string;
  photoURL: string;
  phoneNumber: any;
  emailVerified: boolean;
  id_Number: number;
  ref_Nr: any;
  title: string;
  lastName: string;
  nickName: string;
  pick: any;
  drop: any;
  paymentMethod: any;
  cardType: any;
  cardName: string;
  cardNumber: number;
  cvv: number;
  expiryDate: Date;
  terms: string;
  password: any;
  pass: any;
  privacy: any;
  policy: string
  contractor_address: any;
  next_of_kin_name: any;
  next_of_kin_surname: any;
  next_of_kin_address: any;
  next_of_kin_contact: any;
  background_check: any;
}






@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userData: any;
  randomNumberFloor;
  rawRandomNumber;
  randomnumberCeil;
  pw: any = this.pass();
  passW: any = this.paasW();
  id: any = this.getID();
  displayName: string;
policy: string = "privacy policy text here!"

  constructor(
    private alertController: AlertController,
    public ngZone: NgZone, 
    public afStore: AngularFirestore, 
    public ngFireAuth: AngularFireAuth, 
    public router: Router, 
    private auth: Auth, 
    private firestore: Firestore
  ) { 

    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  
  }

  getRandomInt(min, max, raw) : number{
    raw = Math.random() * 10000000;
    min = Math.ceil(raw);
    max = Math.floor(min);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  getRandomInt1(min, max, raw) : number{
    raw = Math.random() * 10000000;
    min = Math.ceil(raw);
    max = Math.floor(min);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }


     // Login in with email/password
  
 
     SignContractorIn(mail, pass) {
      this.passW = pass ;
      console.log(pass ,"pppoppPWORD");
      return this.ngFireAuth.signInWithEmailAndPassword(mail, pass);
    }

    SignIn(email, password) {
      this.pw = password ;
      console.log(password ,"pPWORD");
      return this.ngFireAuth.signInWithEmailAndPassword(email, password);
    }
    // Email verification when new user register
    SendVerificationMail() {
      return this.ngFireAuth.currentUser.then((user) => {
        return user.sendEmailVerification().then(() => {
          // this.router.navigate(['client-login']);
        });
      });
    }

    paasW(){
    
      return this.getRandomInt1(1000000000000000000000, 10000000000000000000000000000, 1000000000000000000000000).toString() ;
    }

    pass(){
    
      return this.getRandomInt(1000000000000000000000, 10000000000000000000000000000, 1000000000000000000000000).toString() ;
    }
  
    getID(){
      this.rawRandomNumber = Math.random() * 100000000;
      this.randomNumberFloor = Math.floor(this.rawRandomNumber);
      this.randomnumberCeil = Math.ceil(this.rawRandomNumber);
    
      console.log(this.rawRandomNumber ,"Raw Random Nr");
      console.log(this.randomnumberCeil, "Ceil");
      console.log(this.randomNumberFloor, "Floor");
      var id =this.randomNumberFloor + this.randomnumberCeil;
      console.log(id, "IDDDDDDDDD")
    
      return id
      
  
    }

    // SendVerificationMail() {
    //   this.ngFireAuth.authState.currenUser.sendEmailVerification();
    //   return this.ngFireAuth.auth.currentUser.sendEmailVerification()
    //   .then(() => {
    //     this.router.navigate(['verify-email']);
    //   })
    // }
  
    // async SendVerificationMail() {
    //   return await(await this.auth.currentUser).sendEmailVerification()
    //   .then(() => {
    //     this.router.navigate(['terms']);
    //   })
    // }
  
      // Store user in localStorage
      SetUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
          `users/${user.uid}`
        );
        const userData: User = {
          // uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          id_Number: this.id,
          ref_Nr: user.ref_Nr,
          title: user.title,
          lastName:user.lastName,
          nickName: user.nickName,
          pick: user.pick,
          drop: user.drop,
          paymentMethod: user.paymentMethod,
          cardType: user.cardType,
          cardName: user.cardName,
          cardNumber: user.cardNumber,
          cvv: user.cvv,
          expiryDate: user.expiryDate,
          terms: user.terms,
          pass: this.passW,
          password: this.pw,
          privacy: user.privacy,
          policy: user.policy,
          contractor_address: user.contractor_address,
          next_of_kin_name: user.next_of_kin_name,
          next_of_kin_surname: user.next_of_kin_surname,
          next_of_kin_address: user.next_of_kin_address,
          next_of_kin_contact: user.next_of_kin_contact,
          background_check: user.background_check,
          id: user.id
        };
        return userRef.set(userData, {
          merge: true,
        });
        
      }

    
      // Sign-out
      SignOut() {
        return this.ngFireAuth.signOut().then(() => {
          localStorage.removeItem('user');
          this.router.navigate(['client-login']);
        });
      }
  
    // Recover password
    PasswordRecover(passwordResetEmail) {
      return this.ngFireAuth
        .sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
          this.presentAlert("Password reset email has been sent, please check your email.")
          // window.alert(
          //   'Password reset email has been sent, please check your inbox.'
          // );
        })
        .catch((error) => {
          // window.alert(error);
          this.presentAlert(error)

          
        });
    }
    // Returns true when user is loged in
    get isLoggedIn(): boolean {
      const user = this.userData;
      if(user === null || user === undefined) return false
      return user.emailVerified;
      // const user = JSON.parse(localStorage.getItem('user'));
      // return user !== null && user.emailVerified !== false ? true : false;
      
    }
    // Returns true when user's email is verified
    get isEmailVerified(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return this.userData.emailVerified !== false ? true : false;
      
    }
    // Sign in with Gmail
    GoogleAuth() {
      return this.AuthLogin(new auth.GoogleAuthProvider());
    }
    // Auth providers
    AuthLogin(provider) {
      return this.ngFireAuth
        .signInWithPopup(provider)
        .then((result) => {
          this.ngZone.run(() => {
            this.router.navigate(['dashboard']);
          });
          this.SetUserData(result.user);
        })
        .catch((error) => {
          window.alert(error);
        });
    }

    RegisterContractor(user: any) :Promise<any>{

      return this.ngFireAuth.createUserWithEmailAndPassword(user.email, this.passW).then((result)=>{
        console.log(this.passW, "begin REGIster in Services");
          let emailLower = user.email.toLowerCase();
          this.afStore.doc('/contractor/' + emailLower)
          .set({
                displayName: user.displayName,
                emailLower: emailLower,
                mail: user.email,
                phoneNumber: user.phoneNumber,
                // uid: this.userData.uid,
                emailVerified: this.userData.emailVerified,
                ID_Number: this.id,
                reference_Nr: user.ref_Nr,
                title: user.title,
                lastName:user.lastName,
                nickName: user.nickName,
                contractor_address: user.contractor_address,
                next_of_kin_name: user.next_of_kin_name,
                next_of_kin_surname: user.next_of_kin_surname,
                next_of_kin_address: user.next_of_kin_address,
                next_of_kin_contact: user.next_of_kin_contact,
                background_check: user.background_check,
                id: user.id,
                terms: user.terms,
                pass : this.passW,
                privacy: user.privacy,
                policy: user.policy

          });
          // result.user.sendEmailVerification();
          // this.SendVerificationMail();
          console.log(this.passW," service --End registration");
          
      }).catch(error => {
        console.log('Auth Service: signup error', error);
        
        this.presentAlert(error);
        if (error.code)
            return {
               isValid: false, message: error.message 
              };
    });
    }


       // Register user with email/password
       RegisterUser(user: any) :Promise<any>{

        return this.ngFireAuth.createUserWithEmailAndPassword(user.email, this.pw).then((result)=>{
          console.log(this.pw, "begin REGIster in Services");
            let emailLower = user.email.toLowerCase();
            this.afStore.doc('/users/' + emailLower)
            .set({
                  displayName: user.displayName,
                  emailLower: emailLower,
                  email: user.email,
                  phoneNumber: user.phoneNumber,
                  // uid: this.userData.uid,
                  emailVerified: this.userData.emailVerified,
                  ID_Number: this.id,
                  reference_Nr: user.ref_Nr,
                  title: user.title,
                  lastName:user.lastName,
                  nickName: user.nickName,
                  Default_pickup: user.pick,
                  Default_pickup_drop: user.drop,
                  paymentMethod: user.paymentMethod,
                  cardType: user.cardType,
                  cardName: user.cardName,
                  cardNumber: user.cardNumber,
                  cvv: user.cvv,
                  expiryDate: user.expiryDate,
                  terms: user.terms,
                  password : this.pw,
                  privacy: user.privacy,
                  policy: user.policy
  
            });
            // result.user.sendEmailVerification();
            // this.SendVerificationMail();
            console.log(this.pw," service --End registration");
            
        }).catch(error => {
          console.log('Auth Service: signup error', error);
          
          this.presentAlert(error);
          if (error.code)
              return {
                 isValid: false, message: error.message 
                };
      });
      }
  
  
    async presentAlert(message) {
      const alert = await this.alertController.create({
        header: 'Attention User',
        message:message,
        buttons: [
        //   {
        //   text:'Veryfy',
        //   handler: () => {
        //     this.router.navigateByUrl('/verify-email')
        //   //  this.dismiss()
        //   }
    
        // },
        {
          text:'Ok',
          handler: () => {
            // this.router.navigateByUrl('/verify-email')
           this.alertController.dismiss();
          }
    
        },
      ]
      });
    
      await alert.present();
    
    }
          //Password generation
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
      var complete = this.shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
      var reference = this.getRandomNumberBetween();
      return complete;
      
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

   public getRandomNumberBetween(){
      this.rawRandomNumber = Math.random() * 10000000000;
      this.randomNumberFloor = Math.floor(this.rawRandomNumber);
      this.randomnumberCeil = Math.ceil(this.randomNumberFloor);
    
      console.log(this.rawRandomNumber ,"Raw Random Nr");
      console.log(this.randomnumberCeil, "Ceil");
      console.log(this.randomNumberFloor, "Floor");
      return this.randomnumberCeil;
      }
    
    

   
  
}
