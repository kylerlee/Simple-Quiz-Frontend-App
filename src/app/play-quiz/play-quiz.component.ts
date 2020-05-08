import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from '../result/result.component';

@Component({
  templateUrl: './play-quiz.component.html'
})
export class PlayQuizComponent implements OnInit {

  questions = [];
  step = 0;

  constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    var quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(quizId);
    this.api.questionListObsvb.subscribe(res => {
      this.questions = res;
      this.questions.forEach(q => {
        q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3];
        q.answers = shuffle(q.answers);
      });
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  finish(){
    var correct = 0;
    this.questions.forEach(q => {
      if(q.selectedAnswer == q.correctAnswer){
        correct++;
      }
    });
    let dialogRef = this.dialog.open(ResultComponent, {
      data: {correct: correct, total: this.questions.length}
    });
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
