import { Component, Input, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-quizz-item',
  templateUrl: './quizz-item.component.html',
  styleUrls: ['./quizz-item.component.css']
})
export class QuizzItemComponent implements OnInit {
  @Input() choice;
  @Input() choice_letter;
  @Input() index;
  @Input() isAnsweredMode;

  constructor(private quizzService: QuizzService) { }

  ngOnInit(): void {
  }

  submitAnswer() {
    this.quizzService.checkAnswer(this.index);
  }

}
