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



  public constructor(private userService:UserService,private route:ActivatedRoute,private router:Router) {
    this.user1=new User();

  }
  onSubmit(){
    this.userService.save(this.user1).subscribe(
      // result=>this.gotoUserList())
    date=>{console.log("response received ");
      this.router.navigate(['/login']);
    })

  }
  gotoUserList() {
    this.router.navigate(["/clients/"])


  }

}
