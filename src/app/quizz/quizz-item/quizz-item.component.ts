import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz-item',
  templateUrl: './quizz-item.component.html',
  styleUrls: ['./quizz-item.component.css']
})
export class QuizzItemComponent implements OnInit {
  @Input() choice;
  @Input() choice_letter;

  constructor() { }

  ngOnInit(): void {
  }

}
