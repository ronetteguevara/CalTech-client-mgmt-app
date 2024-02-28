import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewMeetingFormComponent } from '../new-meeting-form/new-meeting-form.component';

@Component({
  selector: 'app-meeting-dashboard',
  templateUrl: './meeting-dashboard.component.html',
  styleUrl: './meeting-dashboard.component.css'
})
export class MeetingDashboardComponent {
  constructor(private _dialog: MatDialog) {}

createNewMeeting() {
  this._dialog.open(NewMeetingFormComponent)

}
}
