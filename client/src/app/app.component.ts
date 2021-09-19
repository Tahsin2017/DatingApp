import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from './_services/account.service';

//Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users : any;

  //constructor
  constructor(private accountService: AccountService){}
  
  //Method for OnInit interface
  ngOnInit() {
    this.setCurrentUser();  
  }

  setCurrentUser(){
    const user = JSON.parse(localStorage.getItem('user')!); //! to accept null
    this.accountService.setCurrentUser(user);
  }
}