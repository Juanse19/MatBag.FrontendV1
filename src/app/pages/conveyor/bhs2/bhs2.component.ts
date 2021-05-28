import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Banda2 } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
 @Component({
  selector: 'ngx-bhs2',
  templateUrl: './bhs2.component.html',
  styleUrls: ['./bhs2.component.scss']
})
export class Bhs2Component implements OnInit {

  private alive=true;

  public dataBanda2: Banda2 = {
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",
    b9: "",
    b10: "",
    b11: "",
    b12: "",
    b13: "",
    b14: "",
    b15: "",
    b16: "",
    b17: "",
    b18: "",
    b19: "",
    b20: "",
    b21: "",
    b22: "",
    b23: "",
    b24: "",
    b25: "",
    b26: "",
    b27: "",
    b28: "",
    b29: "",
    b30: "",
    b31: "",
    b32: "",
    b33: "",
    b34: ""
    }

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.banda2NameCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

  public banda2NameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/sf')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.dataBanda2=res[0];
      console.log('data-banda2:', res);
      
    });

  }

}
