import { Component, OnInit } from '@angular/core';
import { QuizzService } from './quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  isAnsweredMode: boolean = false;

  score: number = 0;

  isDisplayResult: boolean = false;

  choices = [];

  choice_letters = ["A", "B", "C", "D"];

  quiz: { question: string, typeQuestion: number } = null;

  constructor(private quizzService: QuizzService) { }

  ngOnInit(): void {
    this.quizzService.scoreChanged.subscribe((data) => this.score = data);

    this.quizzService.isAnsweredMode.subscribe((data: boolean) => {
      this.isAnsweredMode = data;
      this.isDisplayResult = false;

      if (!this.isAnsweredMode) {
        this.quiz = this.quizzService.createRandomQuiz();
      }

      this.choices = this.quizzService.allChoices;
    });
  }

  continueGame() {
    if (this.quizzService.isWrongAnswer) {
      this.isDisplayResult = true;
    }
    else {
      this.quizzService.nextQuiz();
    }
  }

}
