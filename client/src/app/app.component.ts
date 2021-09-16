import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http : HttpClient){}
  
  //Method for OnInit interface
  ngOnInit() {
    this.getUsers();  
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error)
    });
  }
}