import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { MeetingsComponent } from './meetings/meetings.component';
import { NewMeetingFormComponent } from './new-meeting-form/new-meeting-form.component';


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
}