
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MeetingDashboardComponent } from './meetings/meeting-dashboard/meeting-dashboard.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ClientsComponent } from './clients/clients.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NewMeetingFormComponent } from './meetings/new-meeting-form/new-meeting-form.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaterialTimepickerModule }  from 'ngx-material-timepicker';
import { MatNativeDateModule }  from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UpcomingMeetingsTableComponent } from './meetings/upcoming-meetings-table/upcoming-meetings-table.component';
import { NewClientFormComponent } from './clients/new-client-form/new-client-form.component';


const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'meetings', component: MeetingsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NewMeetingFormComponent,
    MeetingDashboardComponent,
    MeetingsComponent,
    ClientsComponent,
    UpcomingMeetingsTableComponent,
    NewClientFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerToggle,
    MatButtonModule,
    NgxMaterialTimepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    MatPaginatorModule,
    MatSortModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }