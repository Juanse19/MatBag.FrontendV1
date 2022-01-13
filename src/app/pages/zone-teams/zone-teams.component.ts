import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-zoneTeams',
  template: `
      <!-- <app-home></app-home> -->
      <router-outlet></router-outlet>

  `,
})
export class ZoneTeamsComponent implements OnDestroy {


  alive: boolean = true;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {

  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}