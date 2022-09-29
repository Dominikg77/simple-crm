import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddUserComponent } from './dialog-add-user.component';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule],
      declarations: [ DialogAddUserComponent],
      providers:[
        {
          provide: MatDialogRef,
          useValue:{}
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
