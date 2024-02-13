import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-meeting-form',
  templateUrl: './new-meeting-form.component.html',
  styleUrl: './new-meeting-form.component.css'
})
export class NewMeetingFormComponent {
  newMeetingForm: FormGroup;

  meetingTime: string[] = [
    '9:00am',
    '9:30am',
    '10:00am',
    '10:30am',
    '11:00am',
    '11:30am',
    '1:00pm',
    '1:30pm',
    '2:00pm',
    '2:30pm',
    '3:00pm',
    '3:30pm',
    '4:00pm',
    '4:30pm'
  ];
}
