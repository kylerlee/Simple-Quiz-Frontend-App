import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {

  quiz = {};
  quizzes;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getQuizzes();
    this.api.quizListObsvb.subscribe(res => this.quizzes = res);
  }

  select(quiz){
    this.api.selectQuiz(quiz);
  }
}
