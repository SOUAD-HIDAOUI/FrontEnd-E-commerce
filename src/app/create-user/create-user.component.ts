import { Component } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user1: User ;
  emailExistsError: string = '';


  public constructor(private userService:UserService,private route:ActivatedRoute,private router:Router) {
    this.user1=new User();

  }
  onSubmit() {
    // Check if the email already exists before attempting to create a new user
    this.userService.fetchClientByEmail(this.user1.email).subscribe(
      (existingUser) => {
        // If an existing user with the same email is found, display an error message
        this.emailExistsError = 'Email already exists. Please choose a different email.';

      },
      (error) => {
        if (error.status === 404) {
          // HTTP status 404 indicates that the email does not exist, proceed with creating the new user
          this.userService.save(this.user1).subscribe(
            (result) => {
              console.log('User created successfully: ', result);
              this.router.navigate(['/login']);
            },
            (saveError) => {
              // Handle other errors during user creation
              console.error(saveError);
            }
          );
        } else {
          // Handle other errors during email check
          console.error(error);
        }
      }
    );
  }

  gotoUserList() {
    this.router.navigate(["/clients/"])


  }

}
