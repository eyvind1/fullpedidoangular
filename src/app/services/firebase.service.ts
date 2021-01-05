import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmpresasModel } from '../models/empresas';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  
  constructor(
    private firestore: AngularFirestore
  ) { }

   getEmpresas(){
    return this.firestore.collection("Gmtc_empresa").snapshotChanges();
  }

  getPromociones(){
    return this.firestore.collection("Gmtc_promocion").snapshotChanges();
  }
  getArrayEmpresas(){
    return this.firestore.collection("Gmtc_empresa").valueChanges();
  }

  getArrayPromociones()
  {
    return this.firestore.collection("Gmtc_promocion").valueChanges();
  }
  getEmpresa(id:any){
    return this.firestore.collection("Gmtc_empresa").doc(id).get();
  }
  
  
  
  
}
