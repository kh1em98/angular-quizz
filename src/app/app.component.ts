import { Component, OnInit } from '@angular/core';
import { QuizzService } from './quizz/quizz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private quizzService: QuizzService) { }

  ngOnInit() {

  }


  title = 'quiz';
}
