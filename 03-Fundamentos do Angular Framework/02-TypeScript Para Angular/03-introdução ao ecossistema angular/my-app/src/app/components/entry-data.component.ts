import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entrydata.component.css'],
})
export class EntryDataComponent {
  placeholder: string = 'email';
  placepass: string = 'senha';
  color: string = 'red';
}
