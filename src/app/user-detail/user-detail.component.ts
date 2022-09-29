import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../models/user.class";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddUserComponent} from "../dialog-add-user/dialog-add-user.component";
import {DialogEditUserComponent} from "../dialog-edit-user/dialog-edit-user.component";
import {DialogEditAddressComponent} from "../dialog-edit-address/dialog-edit-address.component";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId='';
  user:User=new User();

  constructor( private route: ActivatedRoute, private firestore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap =>{
      this.userId=paramMap.get('id');
      console.log('id', this.userId);
      this.getUser();
    })
  }

  getUser() {
    if (this.userId) {
      this.firestore
        .collection('user')
        .doc(this.userId)
        .valueChanges()
        .subscribe((user: any) => {
          this.user = new User(user);
          console.log('ref', this.user)
        })
    }
  }



  editUserMenu(){
const dialog= this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editAddressMenu(){
    const dialog= this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON())
    dialog.componentInstance.userId = this.userId;
  }

}
