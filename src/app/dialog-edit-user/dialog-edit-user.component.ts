import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.class";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user:User;
  loading=false;


  constructor( private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditUserComponent> ) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.loading=true;
    this.firestore
      .collection('user')
      .add(this.user.toJSON())
      .then((resul:any)=>{
        this.loading=false;
        console.log(resul)
        this.dialogRef.close();
      })
  }
}

