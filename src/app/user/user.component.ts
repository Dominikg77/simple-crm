import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogAddUserComponent} from "../dialog-add-user/dialog-add-user.component";
import {User} from "../../models/user.class";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User();
  allUsers = [];
  user$=this.authService.currenUser$;

  constructor(public dialog: MatDialog, private firestore: AngularFirestore,
              private authService: AuthenticationService
              ) {
  }

  ngOnInit(): void {
    this.firestore
      .collection('user')
      .valueChanges({idField: 'UserId'})
      .subscribe((changes: any) => {
        console.log('Test', changes);
        this.allUsers = changes;
      })
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }

}
