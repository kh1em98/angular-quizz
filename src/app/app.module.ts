import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { QuizzItemComponent } from './quizz/quizz-item/quizz-item.component';
import { QuizzHoverDirective } from './quizz/quizz-item/quizz-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    QuizzItemComponent,
    QuizzHoverDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
