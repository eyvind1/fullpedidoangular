import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  /* getEmpresas(){
    return this.firestore.collection("Gmtc_empresa").snapshotChanges();
  }

  getImagenes(){
    return this.firestore.collection("Gmtc_empresa").snapshotChanges();
  } */
}
