import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAddressComponent } from './dialog-edit-address.component';
import {RouterModule} from "@angular/router";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule,AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule,],
      declarations: [ DialogEditAddressComponent ],
      providers:[
        {
          provide: MatDialogRef,
          useValue:{}
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
