import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IPost, IPostData } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts$: Observable<any>;

  constructor(private fireStore: AngularFirestore) {
    this.posts$ = this.fireStore.collection('posts').snapshotChanges();
  }

  getPosts(): Observable<IPost[]> {
    return this.posts$.pipe(
      map(posts =>
        posts.map(post => {
          return {
            id: post.payload.doc.id,
            data: post.payload.doc.data(),
          };
        })
      )
    );
  }

  getPost(postId: string): Observable<IPostData> {
    return this.fireStore
      .collection('posts')
      .doc<IPostData>(postId)
      .valueChanges();
  }

  createPost(data) {
    return this.fireStore.collection('posts').add(data);
  }
}