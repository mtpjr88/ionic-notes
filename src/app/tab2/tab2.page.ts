import { Component } from '@angular/core';
import { Tab1Service } from '../tab1/tab1.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public notes: Notes[];
  public edit: Notes = {id: '', title: '', body: ''};

  constructor(private _tabService: Tab1Service) {
    this._tabService.getAllNotes().subscribe(res => {
      this.notes = res.reverse();
      console.log('Notes:', this.notes);
    });

  }

  public async updateNote(note: Notes) {
   const uNote = await this._tabService.updateNote(note.id, { title: note.title, body: note.body });
   if (note['isEdit']) {
     note['isEdit'] = false;
   }
  }

  public async deleteNote(note: Notes) {
    const dNote = await this._tabService.deleteNote(note.id);
    console.log('deleted note:', dNote);
  }
}
