import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EmpresasModel } from '../models/empresas';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  array:any[];
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
  buscarEmpresas(termino:string):any[]{
    let empresasArr:any[]=[];
    
    termino = termino.toLowerCase();
    this.firestore.collection("Gmtc_empresa").valueChanges().subscribe(resp=>{
      this.array = resp;
    })
    for(let emp of this.array)
    {
      let nombre = emp.emp_cncomer.toLowerCase();
      if (nombre.indexOf(termino)>=0) {
        empresasArr.push(emp)
      } 
    }
    return empresasArr;
  }
  
  
  
}
