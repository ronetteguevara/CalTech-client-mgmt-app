import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewMeetingFormComponent } from './new-meeting-form/new-meeting-form.component';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent {
  constructor(private _dialog: MatDialog) {}

createNewMeeting() {
  this._dialog.open(NewMeetingFormComponent);
}

}
