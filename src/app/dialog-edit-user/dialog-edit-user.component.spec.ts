import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {RouterModule} from "@angular/router";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule,],
      declarations: [ DialogEditUserComponent ],
      providers:[
        {
          provide: MatDialogRef,
          useValue:{}
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
