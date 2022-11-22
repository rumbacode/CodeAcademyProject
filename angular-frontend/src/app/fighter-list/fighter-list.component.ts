import { Component, OnInit, ViewChild } from '@angular/core';
import { Fighter } from '../fighter'
import { FighterService } from '../fighter.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-fighter-list',
  templateUrl: './fighter-list.component.html',
  styleUrls: ['./fighter-list.component.css']
})


export class FighterListComponent implements OnInit {
  fighters!: Fighter[];

  constructor(private fighterService: FighterService,
              private router: Router) { }

  ngOnInit(): void {
    this.getFighters();
  }

  private getFighters(){
    this.fighterService.getFightersList().subscribe(data => {
      this.fighters = data;
    });
  }

  fighterDetails(id: number){
    this.router.navigate(['fighter-details', id]);
  }

  updateFighter(id: number){
    this.router.navigate(['update-fighter', id]);
  }

  deleteFighter(id: number){
    this.fighterService.deleteFighter(id).subscribe( data => {
      this.getFighters();
    })
  }
}




