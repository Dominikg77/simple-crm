import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.class";
import {MatDialogRef} from "@angular/material/dialog";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  user: User= new User();
  loading = false;
  userId: string;


  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditAddressComponent>) {
  }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('user')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
  }
}
