import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.class";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user: User = new User();
  loading = false;
  birthDate: Date;
  userId: string;


  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditUserComponent>) {
  }

  ngOnInit(): void {
  }

  saveUser() {
   //this.user.birthDate = this.birthDate.getTime();
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

