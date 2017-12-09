import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //  name : string = 'Ryan';
  userList: Array<User> = [];
  userName : string ="";
  userAge : number = 0;
  constructor(){
  }
  addUser():void{
    var user:User = new User();
    user.userName = this.userName;
    user.userAge = this.userAge;    
//    alert(this.user.userName);
//    alert(this.user.userAge);
    this.userList.push(user);
  }
  test() : void{
  //  this.test(); 
    var user1:User = new User();
    user1 = new User();    
    user1.userName="MJ";
    user1.userAge=5;
    this.userList.push(user1);    
  }

  
}
