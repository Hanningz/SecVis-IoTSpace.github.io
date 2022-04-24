import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

   barChartLabels = ['01', '02', '03', '04', '05', '06', '07'];
    barChartType = 'bar';

    barChartLegend = true;
    barChartData = [
      {data: [15, 19, 20, 21, 26, 15, 10], label: 'Water leakage'},
      {data: [28, 18, 30, 19, 26, 27, 20], label: 'Smoke'}
    ];
  

  lineChartLabels = ['01', '02', '03', '04', '05', '06', '07','08', '09'];
  lineChartType = 'line';
  lineChartLegend = true;
  lineChartData = [
    {data: [15, 9, 12, 11, 16, 17, 10, 6, 12], label: 'Alerts'},
    
  ];


  doughnutChartLabels = ['Threats', 'Attacks', 'Risks', 'Physical alarms'];
  doughnutChartData = [28, 12, 42, 77];
  doughnutChartType = 'doughnut';

  

  options = {
    centeredSlides: true,
    slidesPerView: 1.15,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

  message: string="";

  constructor() {}


}
