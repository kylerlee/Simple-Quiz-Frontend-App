import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuestionComponent } from './question.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth.service';
import { AuthInterceptor } from './service/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { PlayComponent } from './play/play.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { ResultComponent } from './result/result.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent,
    QuestionComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [
    ApiService, 
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ResultComponent]
})
export class AppModule { }
