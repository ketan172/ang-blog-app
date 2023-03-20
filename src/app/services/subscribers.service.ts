import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collection, Firestore, query, where, collectionData, getDoc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: Firestore) { }

  addSubs(subData: any){
    const collectionInstance = collection(this.afs,'subscribers'); 

    addDoc(collectionInstance,subData).then((docRef: any) =>{
          //  this.toastr.success('Data Insert Successfully  ..!');
          console.log('Subscriber Saved Successfully'); 

       
    });
  }

  checkSubs(subEmail: unknown) {
    const collectionInstance = collection(this.afs,'subscribers')
    const q = query(collectionInstance, where('email','==',subEmail)) ;
    return getDocs(q);
}
}
