import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Elakiyaa';
  details: UserDetails;

  constructor(public auth: AuthenticationService){ }

}
