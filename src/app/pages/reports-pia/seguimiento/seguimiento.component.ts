import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {

  

  public reportServiceUrl12?: string;
  public reportServerUrl12?: string;
  public serviceAuthorizationToken?: string;
  public reportPath12?: string;
  
  constructor() { 
    
   }

  ngOnInit(): void {
    this.reportServiceUrl12 = 'http://10.120.18.8:56997/reporting/reportservice/api/Viewer';
    this.reportServerUrl12 = 'http://10.120.18.8:56997/reporting/api/site/site1';
    this.serviceAuthorizationToken = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1sYWRtaW5AbWF0ZWMuY29tLmNvIiwibmFtZWlkIjoiMSIsInVuaXF1ZV9uYW1lIjoiNzMxODczYjUtMDllNy00ODU4LWE0NGMtOWY0NGQ2NzJhMmFkIiwiSVAiOiIxMC4xMjAuMTguOCIsImlzc3VlZF9kYXRlIjoiMTY0NDMzMTQwMCIsIm5iZiI6MTY0NDMzMTQwMCwiZXhwIjoxNjQ0OTM2MjAwLCJpYXQiOjE2NDQzMzE0MDAsImlzcyI6Imh0dHA6Ly8xMC4xMjAuMTguODo1Njk5Ny9yZXBvcnRpbmcvc2l0ZS9zaXRlMSIsImF1ZCI6Imh0dHA6Ly8xMC4xMjAuMTguODo1Njk5Ny9yZXBvcnRpbmcvc2l0ZS9zaXRlMSJ9.A8PPwUtMfOExPyBcyyMKJkhgfxjL7HzI3VdQqhpV_mI';
    this.reportPath12 = '/Reports Pia/Informe diario'
  }

}
