import { Injectable, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class FirebaseService {

  listings:FirebaseListObservable<any[]>;
  addData:FirebaseListObservable<any[]>;
  listing:FirebaseObjectObservable<any>;
  folder: any;

  constructor(public af: AngularFireDatabase, private router:Router) {
    this.folder = 'listingimages'
    this.listings = this.af.list('/listings') as FirebaseListObservable<Listing[]>
   }

  getListings()
  {
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }

  addListing(listing){
    //Create root ref
    console.log('addListing');
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
        
      });
    }
  }

  updateListing(id,listing){
    this.listings.update(id, listing);
  }

  deleteListing(id:string){
    this.listings.remove(id);

  }

}
interface Listing{
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedroom?: string;
}

