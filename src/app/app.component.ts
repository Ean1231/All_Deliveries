import { Component } from '@angular/core';
import { ServiceService } from '../app/service/service.service'
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user: Observable<any>;


  constructor(public firestore: AngularFirestore,
    public afAuth: AngularFireAuth,
    public authService: ServiceService) {
      this.user = null;
    }

    ngOnInit(): void {
      this.afAuth.authState.subscribe(user => {
        console.log('folder: user', user);
  
        if (user) {
            let emailLower = user.email.toLowerCase();
            this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
        }
    });
  
  }
}
