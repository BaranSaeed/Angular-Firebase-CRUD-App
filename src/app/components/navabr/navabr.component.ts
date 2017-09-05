import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrls: ['./navabr.component.css']
})
export class NavabrComponent implements OnInit {

  user: Observable<firebase.User>;
  constructor(public afAuth:AngularFireAuth, public flashMessage:FlashMessagesService) {
    this.user = afAuth.authState;
  }

  login()
  {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log('login');
  }

  logout()
  {
    this.afAuth.auth.signOut();
    this.flashMessage.show('You are logged out',
    {cssClass: 'alert-success', timeout: 3000});
  }

  ngOnInit() {
  }

}
