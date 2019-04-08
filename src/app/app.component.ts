import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { DataService } from './service/data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  users$: User[];
  
  constructor(private DataService: DataService){

  }
 
  ngOnInit() {
    return this.DataService.getUsers().subscribe(data => this.users$ = data);
  }
}
