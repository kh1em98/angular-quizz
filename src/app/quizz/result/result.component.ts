import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score: number;

  constructor(private quizzService: QuizzService) { }

  ngOnInit(): void {
    this.score = this.quizzService.score;
  }

  onResetGame() {
    this.quizzService.resetGame();
  }

}
