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
    // Ý tưởng : trò chơi sẽ có 2 mode : 1 mode để người chơi chọn đáp án và 1 mode show kết quả 
    // Tạo 1 subject mode trò chơi ( answeredModeChanged ) để emit value mỗi khi trò chơi đổi mode
    // Subscribe subject này để mỗi khi đổi mode, ta sẽ hiện những giao diện / cách xử lý khác nhau 

    // Tạo stream score
    this.quizzService.scoreChanged.subscribe((data) => this.score = data);


    // Mỗi khi 
    this.quizzService.answerModeChanged.subscribe((data: boolean) => {
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
