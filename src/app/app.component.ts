import { Component } from "@angular/core";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SearchService } from "./search.service";



@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pageTitle: string = 'Acme Product Management';
  data: string = '';
  
  constructor(private searchService: SearchService) { }

  search(){
    this.searchService.search.emit(this.data);
  }
}

