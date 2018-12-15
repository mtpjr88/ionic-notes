import { Tab1Service } from './tab1.service';
import { FormsModule } from '@angular/forms';
import { Component, OnDestroy } from '@angular/core';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private _tabService: Tab1Service) {

  }
  public note: Notes = <Notes>{ title: '', body: '' };


  public saveNote() {
    this._tabService.saveNote(this.note).then(res => console.log('save note res:', res));
  }


}
