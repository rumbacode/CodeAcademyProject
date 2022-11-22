import { Component, OnInit} from '@angular/core';
import { Fighter } from '../fighter';
import { FighterService } from '../fighter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-fighter',
  templateUrl: './create-fighter.component.html',
  styleUrls: ['./create-fighter.component.css']
})
export class CreateFighterComponent implements OnInit {
  fighter: Fighter = new Fighter();

  constructor(private fighterService: FighterService, private router: Router) { }

  ngOnInit(): void {
  }

  saveFighter(){
    this.fighterService.createFighter(this.fighter).subscribe( data =>{
        console.log(data);
        this.goToFighterList();
      },
      error => console.log(error));
  }

  goToFighterList(){
    this.router.navigate(['/fighters']);
  }

  onSubmit(){
    console.log(this.fighter);
    this.saveFighter();
  }

}
