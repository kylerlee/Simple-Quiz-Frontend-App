import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { QuestionComponent } from './question.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { PlayComponent } from './play/play.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';

const routes: Routes = [
  { path: '', component: PlayComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'play-quiz/:quizId', component: PlayQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
