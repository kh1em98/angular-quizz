import { Component, OnInit } from '@angular/core';
import { QuizzService } from './quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  isAnsweredMode: boolean = true;

  isLoading: boolean = true;

  choices = [];

  choice_letters = ["A", "B", "C", "D"];


  quiz: { question: string, typeQuestion: number } = null;

  constructor(private quizzService: QuizzService) { }

  ngOnInit(): void {
    this.quizzService.fetchAllCountries()
      .subscribe(() => {
        this.isLoading = false;
        this.quiz = this.quizzService.createRandomQuiz();
        this.choices = this.quizzService.allChoices;
      })

  }

}
