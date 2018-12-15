import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service  {

constructor(private _db: AngularFirestore) {
  this.dbNotesCollection = this.initFirebaseCollection();
    this.allNotes = this.dbNotesCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }

  public dbNotesCollection: AngularFirestoreCollection<any>;
  public allNotes: Observable<Notes[]>;

  public getAllNotes(): Observable<Notes[]> {
    return this.allNotes;
  }

  public initFirebaseCollection(): AngularFirestoreCollection<any> {
    return this._db.collection('notes');
  }

  public saveNote(note) {
    return this.dbNotesCollection.add(note);
  }


}
