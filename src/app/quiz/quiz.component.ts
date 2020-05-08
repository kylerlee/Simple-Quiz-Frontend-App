import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})

export class QuizComponent {

    quiz = {};

    constructor(private api: ApiService){}

    ngOnInit(){
        this.api.selectedQuizObsvb.subscribe(quiz => this.quiz = quiz);
    }

    post(quiz){
        this.api.postQuiz(quiz);
    }

    put(quiz){
        this.api.putQuiz(quiz);
    }
}