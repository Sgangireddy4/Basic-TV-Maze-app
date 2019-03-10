import { Component } from '@angular/core';
import { IShowDetails } from './ishow-details';
import { ShowService } from './show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-maze-app';
  Shows: IShowDetails[];
  show: IShowDetails;
  constructor(private showservice:ShowService) { }

  doSearch(searchValue: string){
    const UserInput = searchValue.trim();
    this.showservice.getShowDetails(UserInput).subscribe(data => this.Shows = data);
  }

  
  doSingleSearch(showname: string){
    this.showservice.getSingleShowDetails(showname).subscribe(data => this.show = data)
  }
}
