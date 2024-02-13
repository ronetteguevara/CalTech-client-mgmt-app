import { RouterModule, Routes } from '@angular/router'
import { ClientsComponent } from './clients/clients.component'
import { MeetingsComponent } from './meetings/meetings.component'

const routes: Routes = [
  { path: './clients/clients.component', component: ClientsComponent, outlet: 'header' },
  { path: './meetings/meetings.component', component: MeetingsComponent, outlet: 'header' },
]

export const appRouting = RouterModule.forRoot(routes);