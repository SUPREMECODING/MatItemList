import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns = ['distance', 'rate', 'project_size', 'completion_date'];
  dataSource = new MatTableDataSource(PROJECT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    console.log(this.sort);
    this.dataSource.sort = this.sort;
    
  }
}

export interface PROJECT {
  distance: number;
  rate: number;
  project_size: number;
  completion_date: string;
}

const PROJECT_DATA: PROJECT[] = [
      {
          "distance": 10,
          "rate": 828,
          "project_size": 26,
          "completion_date": "2017-06-01"
      },
      {
          "distance": 4,
          "rate": 991,
          "project_size": 29,
          "completion_date": "2017-02-01"
      },
      {
          "distance": 47,
          "rate": 850,
          "project_size": 22,
          "completion_date": "2017-12-26"
      },
      {
          "distance": 26,
          "rate": 811,
          "project_size": 32,
          "completion_date": "2017-09-13"
      },
      {
          "distance": 35,
          "rate": 793,
          "project_size": 25,
          "completion_date": "2017-09-01"
      },
      {
          "distance": 19,
          "rate": 814,
          "project_size": 26,
          "completion_date": "2018-01-03"
      },
      {
          "distance": 41,
          "rate": 800,
          "project_size": 40,
          "completion_date": "2018-01-01"
      },
      {
          "distance": 47,
          "rate": 895,
          "project_size": 33,
          "completion_date": "2017-08-28"
      },
      {
          "distance": 33,
          "rate": 932,
          "project_size": 33,
          "completion_date": "2017-12-06"
      },
      {
          "distance": 48,
          "rate": 811,
          "project_size": 29,
          "completion_date": "2017-05-02"
      },
      {
          "distance": 36,
          "rate": 733,
          "project_size": 38,
          "completion_date": "2017-12-06"
      },
      {
          "distance": 4,
          "rate": 772,
          "project_size": 34,
          "completion_date": "2017-02-14"
      },
      {
          "distance": 36,
          "rate": 876,
          "project_size": 25,
          "completion_date": "2017-04-02"
      },
      {
          "distance": 47,
          "rate": 804,
          "project_size": 22,
          "completion_date": "2017-05-22"
      },
      {
          "distance": 39,
          "rate": 986,
          "project_size": 36,
          "completion_date": "2017-04-26"
      },
      {
          "distance": 32,
          "rate": 864,
          "project_size": 32,
          "completion_date": "2017-12-29"
      },
      {
          "distance": 2,
          "rate": 888,
          "project_size": 38,
          "completion_date": "2017-02-19"
      },
      {
          "distance": 27,
          "rate": 998,
          "project_size": 21,
          "completion_date": "2017-08-29"
      },
      {
          "distance": 1,
          "rate": 821,
          "project_size": 21,
          "completion_date": "2017-04-06"
      },
      {
          "distance": 28,
          "rate": 757,
          "project_size": 37,
          "completion_date": "2017-09-23"
      },
      {
          "distance": 10,
          "rate": 963,
          "project_size": 27,
          "completion_date": "2017-08-10"
      },
      {
          "distance": 24,
          "rate": 967,
          "project_size": 29,
          "completion_date": "2017-06-09"
      },
      {
          "distance": 1,
          "rate": 765,
          "project_size": 35,
          "completion_date": "2017-10-05"
      },
      {
          "distance": 45,
          "rate": 937,
          "project_size": 34,
          "completion_date": "2017-11-18"
      },
      {
          "distance": 20,
          "rate": 934,
          "project_size": 40,
          "completion_date": "2017-12-17"
      },
      {
          "distance": 2,
          "rate": 759,
          "project_size": 39,
          "completion_date": "2017-12-08"
      },
      {
          "distance": 36,
          "rate": 708,
          "project_size": 23,
          "completion_date": "2017-03-01"
      },
      {
          "distance": 20,
          "rate": 705,
          "project_size": 36,
          "completion_date": "2017-06-11"
      },
      {
          "distance": 22,
          "rate": 978,
          "project_size": 36,
          "completion_date": "2017-02-09"
      },
      {
          "distance": 42,
          "rate": 866,
          "project_size": 27,
          "completion_date": "2017-07-15"
      },
      {
          "distance": 31,
          "rate": 885,
          "project_size": 21,
          "completion_date": "2017-06-05"
      },
      {
          "distance": 13,
          "rate": 953,
          "project_size": 21,
          "completion_date": "2017-02-12"
      },
      {
          "distance": 9,
          "rate": 720,
          "project_size": 22,
          "completion_date": "2017-03-26"
      },
      {
          "distance": 50,
          "rate": 900,
          "project_size": 39,
          "completion_date": "2017-05-06"
      },
      {
          "distance": 42,
          "rate": 843,
          "project_size": 36,
          "completion_date": "2017-07-18"
      },
      {
          "distance": 6,
          "rate": 714,
          "project_size": 31,
          "completion_date": "2017-06-01"
      },
      {
          "distance": 10,
          "rate": 926,
          "project_size": 40,
          "completion_date": "2017-09-06"
      },
      {
          "distance": 4,
          "rate": 756,
          "project_size": 20,
          "completion_date": "2017-04-28"
      },
      {
          "distance": 35,
          "rate": 992,
          "project_size": 25,
          "completion_date": "2017-01-23"
      },
      {
          "distance": 47,
          "rate": 754,
          "project_size": 35,
          "completion_date": "2017-08-20"
      },
      {
          "distance": 37,
          "rate": 947,
          "project_size": 22,
          "completion_date": "2017-01-23"
      },
      {
          "distance": 49,
          "rate": 782,
          "project_size": 21,
          "completion_date": "2018-01-14"
      },
      {
          "distance": 16,
          "rate": 749,
          "project_size": 29,
          "completion_date": "2018-01-10"
      },
      {
          "distance": 26,
          "rate": 841,
          "project_size": 33,
          "completion_date": "2017-08-06"
      },
      {
          "distance": 13,
          "rate": 738,
          "project_size": 37,
          "completion_date": "2018-01-06"
      },
      {
          "distance": 49,
          "rate": 862,
          "project_size": 32,
          "completion_date": "2017-09-26"
      },
      {
          "distance": 39,
          "rate": 746,
          "project_size": 40,
          "completion_date": "2017-10-17"
      },
      {
          "distance": 37,
          "rate": 958,
          "project_size": 20,
          "completion_date": "2017-10-17"
      },
      {
          "distance": 26,
          "rate": 806,
          "project_size": 27,
          "completion_date": "2017-06-23"
      },
      {
          "distance": 20,
          "rate": 943,
          "project_size": 30,
          "completion_date": "2017-01-21"
      },
      {
          "distance": 26,
          "rate": 704,
          "project_size": 33,
          "completion_date": "2017-10-31"
      },
      {
          "distance": 18,
          "rate": 704,
          "project_size": 20,
          "completion_date": "2017-12-04"
      },
      {
          "distance": 39,
          "rate": 879,
          "project_size": 28,
          "completion_date": "2017-02-04"
      },
      {
          "distance": 39,
          "rate": 855,
          "project_size": 35,
          "completion_date": "2017-12-14"
      },
      {
          "distance": 10,
          "rate": 861,
          "project_size": 33,
          "completion_date": "2017-08-03"
      },
      {
          "distance": 1,
          "rate": 983,
          "project_size": 31,
          "completion_date": "2017-07-17"
      },
      {
          "distance": 44,
          "rate": 971,
          "project_size": 34,
          "completion_date": "2017-06-29"
      },
      {
          "distance": 6,
          "rate": 726,
          "project_size": 28,
          "completion_date": "2017-10-08"
      },
      {
          "distance": 49,
          "rate": 901,
          "project_size": 26,
          "completion_date": "2017-07-17"
      },
      {
          "distance": 8,
          "rate": 704,
          "project_size": 35,
          "completion_date": "2018-01-15"
      },
      {
          "distance": 18,
          "rate": 775,
          "project_size": 28,
          "completion_date": "2017-10-11"
      },
      {
          "distance": 4,
          "rate": 764,
          "project_size": 30,
          "completion_date": "2017-09-30"
      },
      {
          "distance": 47,
          "rate": 760,
          "project_size": 25,
          "completion_date": "2017-12-09"
      },
      {
          "distance": 29,
          "rate": 729,
          "project_size": 38,
          "completion_date": "2017-11-30"
      },
      {
          "distance": 43,
          "rate": 989,
          "project_size": 31,
          "completion_date": "2017-06-02"
      },
      {
          "distance": 41,
          "rate": 865,
          "project_size": 28,
          "completion_date": "2017-05-07"
      },
      {
          "distance": 11,
          "rate": 764,
          "project_size": 35,
          "completion_date": "2017-11-19"
      },
      {
          "distance": 18,
          "rate": 957,
          "project_size": 26,
          "completion_date": "2017-05-30"
      },
      {
          "distance": 46,
          "rate": 756,
          "project_size": 39,
          "completion_date": "2017-09-05"
      },
      {
          "distance": 48,
          "rate": 851,
          "project_size": 30,
          "completion_date": "2017-02-01"
      },
      {
          "distance": 25,
          "rate": 803,
          "project_size": 26,
          "completion_date": "2017-02-14"
      },
      {
          "distance": 2,
          "rate": 970,
          "project_size": 36,
          "completion_date": "2017-08-17"
      },
      {
          "distance": 13,
          "rate": 771,
          "project_size": 33,
          "completion_date": "2017-03-03"
      },
      {
          "distance": 38,
          "rate": 927,
          "project_size": 26,
          "completion_date": "2017-06-28"
      },
      {
          "distance": 31,
          "rate": 846,
          "project_size": 26,
          "completion_date": "2017-08-07"
      },
      {
          "distance": 2,
          "rate": 920,
          "project_size": 29,
          "completion_date": "2017-12-26"
      },
      {
          "distance": 4,
          "rate": 701,
          "project_size": 26,
          "completion_date": "2017-11-10"
      },
      {
          "distance": 13,
          "rate": 847,
          "project_size": 35,
          "completion_date": "2017-02-02"
      },
      {
          "distance": 13,
          "rate": 945,
          "project_size": 23,
          "completion_date": "2017-04-02"
      },
      {
          "distance": 11,
          "rate": 812,
          "project_size": 36,
          "completion_date": "2017-07-23"
      },
      {
          "distance": 38,
          "rate": 868,
          "project_size": 24,
          "completion_date": "2017-08-22"
      },
      {
          "distance": 12,
          "rate": 839,
          "project_size": 27,
          "completion_date": "2017-09-06"
      },
      {
          "distance": 32,
          "rate": 712,
          "project_size": 23,
          "completion_date": "2017-06-16"
      },
      {
          "distance": 46,
          "rate": 949,
          "project_size": 25,
          "completion_date": "2017-02-11"
      },
      {
          "distance": 23,
          "rate": 865,
          "project_size": 20,
          "completion_date": "2017-02-10"
      },
      {
          "distance": 6,
          "rate": 718,
          "project_size": 37,
          "completion_date": "2017-03-29"
      },
      {
          "distance": 37,
          "rate": 921,
          "project_size": 24,
          "completion_date": "2017-02-01"
      },
      {
          "distance": 33,
          "rate": 895,
          "project_size": 20,
          "completion_date": "2017-07-20"
      },
      {
          "distance": 27,
          "rate": 834,
          "project_size": 24,
          "completion_date": "2017-10-13"
      },
      {
          "distance": 39,
          "rate": 711,
          "project_size": 31,
          "completion_date": "2017-09-30"
      },
      {
          "distance": 18,
          "rate": 933,
          "project_size": 24,
          "completion_date": "2017-03-29"
      },
      {
          "distance": 12,
          "rate": 858,
          "project_size": 22,
          "completion_date": "2017-10-13"
      },
      {
          "distance": 39,
          "rate": 771,
          "project_size": 35,
          "completion_date": "2018-01-05"
      },
      {
          "distance": 37,
          "rate": 990,
          "project_size": 39,
          "completion_date": "2017-09-06"
      },
      {
          "distance": 3,
          "rate": 992,
          "project_size": 22,
          "completion_date": "2017-03-24"
      },
      {
          "distance": 16,
          "rate": 773,
          "project_size": 24,
          "completion_date": "2018-01-05"
      },
      {
          "distance": 44,
          "rate": 922,
          "project_size": 31,
          "completion_date": "2017-10-16"
      },
      {
          "distance": 21,
          "rate": 975,
          "project_size": 37,
          "completion_date": "2017-03-06"
      },
      {
          "distance": 5,
          "rate": 889,
          "project_size": 34,
          "completion_date": "2017-12-30"
      },
      {
          "distance": 30,
          "rate": 983,
          "project_size": 27,
          "completion_date": "2017-07-28"
      }
  ];