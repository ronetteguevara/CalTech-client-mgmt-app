import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewClientFormComponent } from './new-client-form/new-client-form.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  constructor(private _dialog: MatDialog) {}
createNewClient() {
  this._dialog.open(NewClientFormComponent);
}
}
