import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    WelcomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'quiz', component: QuizComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: 'result', component: ResultComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
