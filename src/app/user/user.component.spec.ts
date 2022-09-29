import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule,],
      declarations: [ UserComponent ],
      providers:[
        {
          provide: MatDialogRef,
          useValue:{}
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
