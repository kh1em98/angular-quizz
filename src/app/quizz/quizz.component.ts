import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  choices = [
    "Viet Nam",
    "Thai Lan",
    "Lao",
    "Campuchia"
  ]

  choice_letters = ["A", "B", "C", "D"];

  constructor() { }

  ngOnInit(): void {
  }

}
