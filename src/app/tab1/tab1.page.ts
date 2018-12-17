import { Tab1Service } from './tab1.service';
import { FormsModule } from '@angular/forms';
import { Component, OnDestroy } from '@angular/core';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private _tabService: Tab1Service, private alertController: AlertController) {

  }
  public note: Notes = <Notes>{ title: '', body: '' };


  public async saveNote() {
   const sNote = await this._tabService.saveNote(this.note);
   if (sNote) {
     await this.presentAlert(this.note);
     this.note = <Notes>{ title: '', body: '' };
    }
  }

  async presentAlert(note: Notes) {
    const alert = await this.alertController.create({
      header: 'Note Saved',
      message: `"${note.title}" is Saved!`,
      buttons: ['OK']
    });

    await alert.present();
  }

  public clearInput(): void {
    this.note.title = '';
    this.note.body = '';
  }
}
