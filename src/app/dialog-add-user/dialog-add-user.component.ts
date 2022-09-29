import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.class";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading = false;
  userId: string;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {
  }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user)
    this.loading = true;
    this.firestore
      .collection('user')
      .add(this.user.toJSON())
      .then((resul: any) => {
        this.loading = false;
        console.log(resul)
        this.dialogRef.close();
      })
  }

}
