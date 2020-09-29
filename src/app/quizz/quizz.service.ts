import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountryDetail } from '../shared/country.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  arrCountries: CountryDetail[] = [];
  countryChosen: CountryDetail = null;

  questionTaken: { index: number, typeQuestion: number }[] = [];

  allChoices: string[] = [];


  constructor(private http: HttpClient) { }

  fetchAllCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;flag')
      .pipe(
        tap((data: CountryDetail[]) => {
          this.arrCountries = data;
        })
      )
  }

  // Tạo 1 số ngẫu nhiên nhỏ hơn max, không trùng các số đã thi
  chooseCountry(max: number): { index: number, typeQuestion: number } {
    let isExisted: boolean = false;

    for (let i = 0; i < max; i++) {
      let randIndex = Math.floor(Math.random() * max);

      // 0 nếu là kiểu câu hỏi ... là thủ đô của nước nào
      // 1 : cờ ... là của nước nào
      let randTypeQuestion = Math.floor(Math.random() * 2);

      // Kiểm tra số được tạo có trùng với số đã thi ko
      for (let j = 0; j < this.questionTaken.length; j++) {
        if (randIndex === this.questionTaken[j].index && randTypeQuestion === this.questionTaken[j].typeQuestion) {
          isExisted = true;
          break;
        }
      }
      if (isExisted === false) {
        return {
          index: randIndex,
          typeQuestion: randTypeQuestion
        }
      }
    }
    console.log(isExisted);
    return null;
  }


  // Xếp các đáp án ngẫu nhiên
  randomPositionChoices(choices) {
    while (choices.length > 0) {
      let randNumber = Math.floor(Math.random() * 4);

      if (!this.allChoices[randNumber]) {
        this.allChoices[randNumber] = choices[0];
        choices.shift();
      }
    }
  }

  // Tạo mảng 4 đáp án
  createAllChoices() {
    let choices = [];
    choices.push(this.countryChosen.name);

    while (1) {
      let isExisted: boolean = false;
      let randIndex: number = Math.floor(Math.random() * this.arrCountries.length);

      for (let i = 0; i < this.allChoices.length; i++) {
        if (this.arrCountries[randIndex].name === this.allChoices[i] && this.arrCountries[randIndex].name !== this.countryChosen.name) {
          isExisted = true;
          break;
        }
      }

      if (!isExisted) {
        choices.push(this.arrCountries[randIndex].name);
        if (choices.length === 4) {
          this.randomPositionChoices(choices);
          return;
        }
      }
    }
  }



  // Chọn 1 country để đưa ra câu hỏi
  createRandomQuiz() {
    const lengthArrCountries = this.arrCountries.length;
    const { index, typeQuestion } = this.chooseCountry(lengthArrCountries);
    if (index !== null) {
      this.questionTaken.push({ index, typeQuestion });
      this.countryChosen = this.arrCountries[index];

      this.createAllChoices();

      if (typeQuestion === 0) {
        return { question: `${this.countryChosen.capital}`, typeQuestion: typeQuestion }
      }

      else {
        return { question: `${this.countryChosen.flag}`, typeQuestion: typeQuestion }
      }

    }
    else {
      return { question: 'End !', typeQuestion: -1 }
    }
  }

}
