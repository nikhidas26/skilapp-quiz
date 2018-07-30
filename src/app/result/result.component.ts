import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  pageTitle: String = 'Drumroll - Results!';
  percentageResult: number;
  reviewResults;  

  // make http calls to the result api in the back end

  constructor( private httpClient: HttpClient) {
    this.httpClient.get('http://18.233.224.125:9090/results/12')
      .subscribe((data) => {
        this.percentageResult = parseInt(data.overallResult);
      });

      this.httpClient.get('http://18.233.224.125:9090/results/test/12')
      .subscribe((data) => {
        this.reviewResults = data;

      });
  }

  ngOnInit() {
  }

}
