import { Component, OnInit } from '@angular/core';
import { USER } from 'src/app/app.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userList:any = USER;
  constructor() { }

  ngOnInit(): void {
  }
  selection(item){
    return item.userid;
  }

}
