import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { UserService } from '../../services/user.service';
import {ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
/*
  constructor() { }

  ngOnInit() {
  }

}
*/
currentUser= new User();
currentUser1= new User();

id: number;

constructor(private activatedRoute: ActivatedRoute,private userService: UserService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
  }

/*
  updateUser() {
    this.userService.updateUser(this.currentUser).subscribe(() => {
        this.router.navigate(['user']);
      }
    );
  }
  */


  


  
  updateUser() {
    this.activatedRoute.params.subscribe((params: Params) => {this.id = params.id});
    console.log(this.id);
    this.currentUser.id = this.id;
    
    this.userService.updateUser(this.currentUser1).subscribe(() => {
       
    this.router.navigate(['user-profile']);
      }
     , (error) => { alert('Problème lors de la modification !');
    console.log(error); }


  );
  }

/* 
updateUser() {
  this.userService.updateUser(this.currentUser1).subscribe(() => {
    this.router.navigate(['/user-profile']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }
  */

  


}