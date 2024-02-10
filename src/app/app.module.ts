import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateMeetingComponent } from './create-meeting/create-meeting.component';
import { MeetingDashboardComponent } from './meeting-dashboard/meeting-dashboard.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateMeetingComponent,
    MeetingDashboardComponent,
    MeetingsComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
