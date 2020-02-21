import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(
    private fs : AngularFirestore
  ) { }

  public createPost(data: any) {
    return this.fs.collection('posts').add(data);
  }


  public getPosts() {
    return this.fs.collection('posts').snapshotChanges();
  }
}
