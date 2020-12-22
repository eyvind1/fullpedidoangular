import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  empresas:Observable<Empresa[]>;
  constructor(
    private firestore: AngularFirestore
  ) { }

   getEmpresas(){
    return this.firestore.collection("Gmtc_empresa").snapshotChanges();
  }

  getPromociones(){
    return this.firestore.collection("Gmtc_promocion").snapshotChanges();
  }

  
  
}
