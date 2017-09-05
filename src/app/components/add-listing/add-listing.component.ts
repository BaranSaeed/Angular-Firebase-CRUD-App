import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../../service/firebase.service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title:any;
  owner:any;
  city:any;
  bedrooms:any;
  price:any;
  type:any;
  image:any;

  constructor(private firebaseService:FirebaseService, private router:Router) { }

  ngOnInit() {
  }

  //   addToList(event: any) {
  //   const file: File = event.target.files[0];
  //   console.log('file name', file.name);

  //   const metaData = {'contentType': file.type};
  //   const storageRef: firebase.storage.Reference = firebase.storage().ref('/photos/mansion1');
  //   storageRef.put(file, metaData);
  //   console.log('Uploading', file.name);
  // }

  onAddSubmit(){
    let listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      bedrooms: this.bedrooms,
      price: this.price,
      type: this.type
    }
      
    this.firebaseService.addListing(listing);

    this.router.navigate(['listings']);
    console.log('navigate');
  }

}
