import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { QuizzItemComponent } from './quizz/quizz-item/quizz-item.component';
import { QuizzHoverDirective } from './quizz/quizz-item/quizz-hover.directive';
import { ResultComponent } from './quizz/result/result.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    QuizzItemComponent,
    QuizzHoverDirective,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
