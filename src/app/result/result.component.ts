import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  pageTitle: String = 'Drumroll - Results!';
  percentageResult: number = 100;

  // make http calls to the result api in the back end

  constructor() { }

  ngOnInit() {
  }

}
