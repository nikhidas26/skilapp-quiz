import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public pageTitle = 'Welcome to SkilApp Quiz - A place to test your skills and see where you are at?';

  constructor() { }

  ngOnInit() {
  }

  startQuiz() {
    console.log("Start quiz clicked");
  }
}
