import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'question-detail',
    templateUrl: './question-detail.component.html'
})

export class QuestionDetailComponent {

    question = {};
    quizId;

    constructor(private api: ApiService, private route: ActivatedRoute){}

    ngOnInit(){
        this.quizId = Number(this.route.snapshot.paramMap.get("quizId"));
        this.api.selectedQuestionObsvb.subscribe(question => this.question = question);
    }

    post(question){
        question.quizId = this.quizId;
        this.api.postQuestion(question);
    }

    put(question){
        this.api.putQuestion(question);
    }
}