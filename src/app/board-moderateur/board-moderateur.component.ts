import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-board-moderateur',
  templateUrl: './board-moderateur.component.html',
  styleUrls: ['./board-moderateur.component.scss']
})
export class BoardModerateurComponent implements OnInit {
  content: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}

