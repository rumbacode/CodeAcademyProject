import { Component, OnInit } from '@angular/core';
import { Fighter } from '../fighter';
import { ActivatedRoute } from '@angular/router';
import { FighterService } from '../fighter.service';

@Component({
  selector: 'app-fighter-details',
  templateUrl: './fighter-details.component.html',
  styleUrls: ['./fighter-details.component.css']
})
export class FighterDetailsComponent implements OnInit {
  id!: number;
  fighter: Fighter = new Fighter();
  constructor(private route: ActivatedRoute, private fighterService: FighterService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.fighter = new Fighter();
    this.fighterService.getFighterById(this.id).subscribe( data => {
      this.fighter = data;
    });
  }
}
