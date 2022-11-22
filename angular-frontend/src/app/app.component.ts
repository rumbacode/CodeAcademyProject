import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UFC Rankings';
  isFightersList: boolean = false;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() === '/fighters' ) {
        this.isFightersList = true;

      } else {
        this.isFightersList = false;

      }
    });
  }


  ngOnInit() {
    //this.pageLink = this.router;
    //console.log(this.route);
  }
}
