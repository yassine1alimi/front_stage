import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/model/reclamation.model';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  classem: Reclamation[] = [];
reclamations : any;
//displayreclamation : Reclamation[]= [];

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {

    /*this.reclamationService.listeReclamations().subscribe(recls => {
      console.log(recls);
      this.reclamations = recls;
      this.displayreclamation = recls;

    });
*/

this.reclamationService.listeReclamations().subscribe(
  (data: Reclamation[]) => {
    this.classem = data;
 
  },
  error => { console.log('error'); });


  }

}
