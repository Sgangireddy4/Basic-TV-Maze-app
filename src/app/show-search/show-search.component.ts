import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'
import { debounceTime } from 'rxjs/Operators';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.scss']
})
export class ShowSearchComponent implements OnInit {
  search = new FormControl('', [Validators.minLength(3)]);
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }
    
  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000))
    .subscribe((searchValue: string)=> {if(!this.search.invalid){this.searchEvent.emit(searchValue)}});
  }

}
