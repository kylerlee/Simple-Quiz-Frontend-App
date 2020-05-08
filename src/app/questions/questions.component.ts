import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  question = {};
  questions;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    var quizId = this.route.snapshot.paramMap.get("quizId");
    this.api.getQuestions(quizId);
    this.api.questionListObsvb.subscribe(res => this.questions = res);
  }

  selectQuestion(question) {
    this.api.selectQuestion(question);
  }
}
