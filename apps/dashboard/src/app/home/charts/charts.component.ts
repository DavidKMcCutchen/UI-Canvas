import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Flow, SankeyController } from 'chartjs-chart-sankey';
import { Subscription } from 'rxjs';



Chart.register(...registerables, SankeyController, Flow);

@Component({
  selector: 'marilias-page-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  data: any;
  
    pieData: any;

    lineData: any;

    chartOptions: any;

    subscription: Subscription;



  colors = {
    a: '#Ddea4c',
    b: '#be4d25',
    c: '#be2a25',
    d: '#be4d25',
  };


  ngOnInit() {
      this.pieData = {
      labels: ['A', 'B', 'C', 'D'],
      datasets: [
        {
          data: [300, 50, 100, 50],
          backgroundColor: [
            "#42A5F5",
                        "#66BB6A",
                        "#FFA726",
                        "BADA55"
          ],
        },
      ],
    }
    const ctx = <HTMLCanvasElement>document.getElementById('iorSankey');
    const chart = new Chart(ctx, {
      type: 'sankey',
      data: {
        datasets: [
          {
            label: 'IOR to CRI Linkage',
            data: [
              { from: 'a', to: 'b', flow: 10 },
              { from: 'a', to: 'c', flow: 5 },
              { from: 'b', to: 'c', flow: 10 },
              { from: 'd', to: 'c', flow: 7 },
            ],
            colorFrom: (c) => this.getColor(c.dataset.data[c.dataIndex].from),
            colorTo: (c) => this.getColor(c.dataset.data[c.dataIndex].to),
            colorMode: 'gradient', // or 'from' or 'to'
            /* optional labels */
            labels: {
              a: 'Enclave A',
              b: 'IOR A',
              c: 'Control Type A',
              d: 'IOR B',
            },
            /* optional priority */
            priority: {
              b: 1,
              d: 0,
            },
            /* optional column overrides */
            column: {
              d: 1,
            },
            size: 'max', // or 'min' if flow overlap is preferred
          },
        ],
      },
      options: {
        responsive: true
      }
    });
  }

  getColor(key) {
    return this.colors[key];
  }

  update(event: Event) {
    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }
  }
}
