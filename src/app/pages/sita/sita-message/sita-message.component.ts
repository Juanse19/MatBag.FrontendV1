import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "../../../@core/backend/common/api/http.service";
import { Router } from "@angular/router";


@Component({
  selector: 'ngx-sita-message',
  templateUrl: './sita-message.component.html',
  styleUrls: ['./sita-message.component.scss']
})
export class SitaMessageComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private api: HttpService
    ) { }

  back() {
    // this.router.navigate(["/pages/sita/energyZone"]);
    // return false;
  }

  ngOnInit(): void {
  }

}
