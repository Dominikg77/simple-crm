import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogAddUserComponent} from "../dialog-add-user/dialog-add-user.component";
import {User} from "../../models/user.class";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AuthenticationService} from "../services/authentication.service";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {


  user = new User();
  allUsers = [];
  user$=this.authService.currenUser$;
  renderArray = [];
  slicedArray = [];
  startIndex = 0;
  endIndex = 10;

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
    this.slicedArray = this.renderArray;

  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }

  /**
   * function for pagination
   */
  OnPageChange(event: PageEvent) {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
    if (this.endIndex > this.renderArray.length) this.endIndex = this.renderArray.length;
    this.slicedArray = this.renderArray.slice(this.startIndex, this.endIndex);
  }

}
