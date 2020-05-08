import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'

const Host = 'https://localhost:44306/api';

export const Endpoints = {
    quiz: `${Host}/quiz`,
    question: `${Host}/question`,
    account: `${Host}/account`
}

@Injectable()
export class ApiService {
    qwe
    constructor(private http: HttpClient) { }

    private selectedQuestion = new Subject<any>();
    selectedQuestionObsvb = this.selectedQuestion.asObservable();
    private questionList = new Subject<any>();
    questionListObsvb = this.questionList.asObservable();
    private selectedQuiz = new Subject<any>();
    selectedQuizObsvb = this.selectedQuiz.asObservable();
    private quizList = new Subject<any>();
    quizListObsvb = this.quizList.asObservable();

    getQuestions(quizId) {
        this.http.get(`${Endpoints.question}/${quizId}`).subscribe(res => this.questionList.next(res));
    }

    postQuestion(question) {
        this.http.post(`${Endpoints.question}`, question).subscribe(res => console.log(res));
        this.getQuestions(question.quizId);
    }

    putQuestion(question) {
        this.http.put(`${Endpoints.question}/${question.id}`, question).subscribe(res => console.log(res));
    }

    selectQuestion(question) {
        this.selectedQuestion.next(question);
    }

    getAllQuizzes() {
        return this.http.get(`${Endpoints.quiz}/all`);
    }

    getQuizzes() {
        this.http.get(`${Endpoints.quiz}`).subscribe(res => this.quizList.next(res));
    }

    postQuiz(quiz) {
        this.http.post(`${Endpoints.quiz}`, quiz).subscribe(res => console.log(res));
        this.getQuizzes();
    }

    putQuiz(quiz) {
        this.http.put(`${Endpoints.quiz}/${quiz.id}`, quiz).subscribe(res => console.log(res));
    }

    selectQuiz(quiz) {
        this.selectedQuiz.next(quiz);
    }
}