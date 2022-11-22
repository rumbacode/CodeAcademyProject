import { Component, OnInit } from '@angular/core';
import { FighterService } from '../fighter.service';
import { Fighter } from '../fighter';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-fighter',
  templateUrl: './update-fighter.component.html',
  styleUrls: ['./update-fighter.component.css']
})
export class UpdateFighterComponent implements OnInit {
  id!: number;
  fighter: Fighter = new Fighter();
  constructor(private fighterService: FighterService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.fighterService.getFighterById(this.id).subscribe(data => {
      this.fighter = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.fighterService.updateFighter(this.id, this.fighter).subscribe( data =>{
        this.goToFighterList();
      }
      , error => console.log(error));
  }

  goToFighterList(){
    this.router.navigate(['/fighters']);
  }
}
