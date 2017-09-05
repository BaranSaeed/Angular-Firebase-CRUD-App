import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { FirebaseService} from '../../service/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id:any;
  listing:any;
  imageURL:any;
  constructor(private firebaseService:FirebaseService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
        //GET ID from URL
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
    this.listing = listing;

    let storageRef = firebase.storage().ref();
    let spaceRef = storageRef.child(listing.path);
    storageRef.child(listing.path).getDownloadURL().then((url) => {
      //Set Image URL
      this.imageURL = url;
    }).catch((error) => {
      console.log(error);
    })
    });
  }

  onDeleteClick(){
    this.firebaseService.deleteListing(this.id);

    this.router.navigate(['/listings']);
  }

}
