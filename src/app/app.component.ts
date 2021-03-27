import { Component } from "@angular/core";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}