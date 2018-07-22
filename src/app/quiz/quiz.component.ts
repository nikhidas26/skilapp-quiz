import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question: string;
  selected: string;
  question_id: number = 1;
  // selectedRadio: number = 0;
  // bool: boolean = false
  options: any;
  isComplete: boolean = false;
  buttonEnabled: boolean = true;
  // x: string = "";

  constructor(private router: Router, private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:9090/questions/1')
      .subscribe((data) => {
        this.question_id = data.questionId;
        this.question = data.question;
        this.options = [
          { value: data.options[0].A, opt: 'A' },
          { value: data.options[1].B, opt: 'B' },
          { value: data.options[2].C, opt: 'C' },
          { value: data.options[3].D, opt: 'D' }
        ];
      });
  }

  // private httpClient:HttpClient

  radioButtonSelect(option) {
    this.selected = option;
    this.buttonEnabled = false;
  }


  nextQuestion() {

    if (this.question_id >= 4) {
      this.isComplete = true;
      this.question_id = 1;
    }

    var userResponseObject = {};

    userResponseObject.questionId = this.question_id;
    userResponseObject.userId = 12;
    userResponseObject.testId = 111;
    userResponseObject.selectedAnswer = this.selected.opt;

    console.log("Sending: " + userResponseObject + " to the backend API")

    // Submitting the response to the backend API to store it in the database
    this.httpClient.post('http://localhost:9090/user/responses', userResponseObject)
      .subscribe((data) => {
        console.log(data + 'Wow');
        this.selected = null;
      });

      this.question_id++;
      this.buttonEnabled = true;
    // Getting the next question from the backend API to get from the database
    this.httpClient.get('http://localhost:9090/questions/' + this.question_id)
      .subscribe((data) => {
        console.log(data.options[0].A);
        this.question = data.question;
        this.options = [
          { value: data.options[0].A, opt: 'A' },
          { value: data.options[1].B, opt: 'B' },
          { value: data.options[2].C, opt: 'C' },
          { value: data.options[3].D, opt: 'D' }
        ];
      });
  }

  submitQuiz() {
    this.router.navigateByUrl('/result');
  }

  ngOnInit() {
  }

}
