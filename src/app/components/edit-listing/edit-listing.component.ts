import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../service/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {

  id;
  title:any;
  owner:any;
  city:any;
  bedrooms:any;
  price:any;
  type:any;
  image:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.title = listing.title;
      this.owner = listing.owner;
      this.city = listing.city;
      this.bedrooms = listing.bedrooms;
      this.price = listing.price;
      this.type = listing.type;
    });
  }

   onEditSubmit(){
    let listing = {
      title: this.title,
      city: this.city,
      owner: this.owner,
      bedrooms: this.bedrooms,
      price: this.price,
      type: this.type
    }

    this.firebaseService.updateListing(this.id, listing);

    this.router.navigate(['/listings']);

  }

}
