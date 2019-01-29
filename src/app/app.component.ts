import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { chart } from 'highcharts';

import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'Highcharts + Angular 7 Demo';
  @ViewChild('chartTarget') chartTarget: ElementRef;
  chart: Highcharts.Chart;
  // options: { chart: { type: string; }; title: { text: string; }; series: { data: number[]; }[]; };
  options: any;
  ngAfterViewInit() {
    this.options = {
      chart: { type: 'bar' },
      title: { text : 'dynamic data example'},
      series: [{ name: '2019', data: [100, 230, 508, 1111, 1900] }]
    };
    this.chart = chart(this.chartTarget.nativeElement, this.options);
  }



  addSeries() {

    this.chart.addSeries({
      type: 'bar',
      name: 'Manish',
      data: [112, 305, 734]
    });

  }

}
