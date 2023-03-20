import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs:Firestore) { }

  loadData() {
    const collectionInstance = collection(this.afs,'categories'); 
     return collectionData(collectionInstance,{ idField:'id'}).pipe( val =>{
      console.log(val);
      return val;
    })

  }
}
