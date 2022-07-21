import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from "../service/service.service";
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  displayName: string;
  lastName: any;
  userData: any;
  
  user: Observable<any>;
  constructor( public ngFireAuth: AngularFireAuth, public authService: ServiceService, public firestore: AngularFirestore) { 
    this.user = null; 
  
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

  


  

}
