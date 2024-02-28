import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { NewClientFormComponent } from './clients/new-client-form/new-client-form.component';
import { NewMeetingFormComponent } from './meetings/new-meeting-form/new-meeting-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mode Client Management Portal';
  constructor(private _dialog: MatDialog) {}

  createNewMeeting() {
  this._dialog.open(NewMeetingFormComponent);
}
  createNewClient() {
  this._dialog.open(NewClientFormComponent);
}

  showMeetings() {
  this._dialog.open(MeetingsComponent);
}

  showClients() {
  this._dialog.open(ClientsComponent);
}
}