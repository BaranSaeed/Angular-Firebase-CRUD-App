import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../../service/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings:any;
  user: Observable<firebase.User>;

  constructor(private firebaseService:FirebaseService, public afAuth:AngularFireAuth) { 
    this.user = afAuth.authState;
  }

  ngOnInit() {
    this.firebaseService.getListings().subscribe(listings => {
      console.log(listings);
      this.listings = listings;
    });
  }

}
