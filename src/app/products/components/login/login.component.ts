import {Component, EventEmitter, Output} from '@angular/core';
import {LoginService} from "../../../login.service";
import {User} from "../../../user";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export  class LoginComponent {
   User :User=new User();
  msg="";
  isLoggedin = false;




  constructor(private servicelogin:LoginService,private  router:Router) {

  }

  loginUser() {
    this.servicelogin.registration(this.User).subscribe(
      data=> {console.log("response recieved ");
       // this.isLoggedin=true;
        this.servicelogin.setUser(data);
        this.router.navigate(['/products']);
      }, error=> {
        console.error("exception occured",error);
        this.msg ="Bad credentials ,please enter valid email and password";
      })



  }

  logoutUser() {
    this.isLoggedin = false;
    this.servicelogin.setUser(null); // Set user to null on logout
    this.router.navigate(['/login']);
  }

  protected readonly onsubmit = onsubmit;

  onSubmit() {
    this.router.navigate(['clients/addClient']);
  }
  isLoggedIn(): boolean {
    return this.servicelogin.isLoggedIn();
  }
}
