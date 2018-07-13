import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question: string = "";
  selected: string = "a";
  selectedRadio: number = 0;
  bool: boolean = false
  options;
  x: string = "";

  constructor() {
    this.options = [
      {value: "a", correct: false},
      {value: "b", correct: false},
      {value: "c", correct: false},
      {value: "d", correct: true},
  ]
   }

  // private httpClient:HttpClient

  refreshing(option) {
    this.selected = option;
    console.log(this.selected);
    this.bool = true;
  }

  isActive(item) {
    return this.bool === item;
  }  

  nextQuestion() { 
    this.bool = false;
    // set http again
    // equal with question, options
   }

  ngOnInit() {
  }

}
