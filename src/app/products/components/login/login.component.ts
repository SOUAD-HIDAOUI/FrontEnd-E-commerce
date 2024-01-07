import {Component, EventEmitter, Output} from '@angular/core';
import {LoginService} from "../../../login.service";
import {User} from "../../../user";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {catchError, Observable, of, switchMap} from "rxjs";

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

  // loginUser() {
  //   this.servicelogin.registration(this.User).subscribe(
  //     data=> {console.log("response recieved ");
  //      this.isLoggedin=true;
  //      console.log("true")
  //
  //       this.router.navigate(['/products']);
  //
  //       this.servicelogin.setUser(data);
  //     }, error=> {
  //       console.error("exception occured",error);
  //       this.msg ="Bad credentials ,please enter valid email and password";
  //     })
  //
  //
  // }
  loginUser() {
    this.servicelogin.registration(this.User).subscribe(
      (data: any) => {
        console.log("Response received: ", data);

        if (data && data.id) {
          this.isLoggedin = true;
          console.log("User logged in: ", data);

          // Utilize the setUser method to store the user in your service.
          this.servicelogin.setUser(data);

          // Redirect to the products page.
          this.router.navigate(['/products']);
        } else {
          console.error("Invalid response format");
          this.msg = "Invalid response format";
        }
      },
      (error) => {
        console.error("Exception occurred", error);
        this.msg = "Bad credentials, please enter valid email and password !";
      }
    );
  }







  protected readonly onsubmit = onsubmit;

  onSubmit() {
    this.router.navigate(['clients/addClient']);
  }
  isLoggedIn(): boolean {
    return this.servicelogin.isLoggedIn();
  }
}
