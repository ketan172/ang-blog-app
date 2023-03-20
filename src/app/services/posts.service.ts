import { Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, getDoc, updateDoc, where } from '@angular/fire/firestore';
import { query,limit, orderBy, DocumentReference, increment } from 'firebase/firestore';
 
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:Firestore) { }

  loadFeatured() {
    const collectionInstance = collection(this.afs,'posts')
    const q = query(collectionInstance, where('isFeatured','==',true,),limit(4));
     return collectionData(q,{ idField:'id'}).pipe( val =>{
      //console.log(val);
      //(ref => ref.where('isFeatured'.'==',true)); 
      return val;
    })

  }

  loadLatest() {
    const collectionInstance = collection(this.afs,'posts')
    const q = query(collectionInstance, orderBy('createdAt'));
     return collectionData(q,{ idField:'id'}).pipe( val =>{
      //console.log(val);
      //(ref => ref.where('isFeatured'.'==',true)); 
      return val;
    })
  }

  loadCategoryPosts(categoryId: string) {
    const collectionInstance = collection(this.afs,'posts')
    const q = query(collectionInstance, where('category.categoryId','==',categoryId),limit(4));
     return collectionData(q,{ idField:'id'}).pipe( val =>{
      //console.log(val);
      //(ref => ref.where('isFeatured'.'==',true)); 
      return val;
    })
  }

  async loadOnePost(postId: any) {
    const collectionInstance = collection(this.afs,'posts'); 
    const docInstance = doc(this.afs,'posts',postId);
    const docSnap = await getDoc(docInstance);
    //console.log(docSnap.data())
    return docSnap.data();
  }

  loadSimilar(catId: unknown ){
    const collectionInstance = collection(this.afs,'posts')
    const q = query(collectionInstance, where('category.categoryId','==',catId),limit(4));
     return collectionData(q,{ idField:'id'}).pipe( val =>{
      //console.log(val);
      //(ref => ref.where('isFeatured'.'==',true)); 
      return val;
    })
  }

//   async countViews(postId: string){

//     const viewsC= {
//         views: firebase.firestore.FieldValue.increment(1)
//     }
//     // const docInstance = doc(this.afs,'posts',postId);
    
//     // this.afs.doc(`posts/$(postId)`).update(viewsCount).then(()=>{
//     //   console.log('Views Count Updated ..!')
//     // })
    
//     const docRef = doc(this.afs, "posts", "DC");
//     await updateDoc(docRef, {
//       viewsCount: viewsC
      
//     });
    

//   //   updateDoc(docInstance).then(() =>{
//   //     // this.toastr.success('Data Updated Successfully  ..!');
//   //     console.log('Views Count Updated ..!')
//   //     // this.router.navigate(['/posts']);
//   // })
// }

}
