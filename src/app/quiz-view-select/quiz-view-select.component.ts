import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-quiz-view-select',
  templateUrl: './quiz-view-select.component.html',
  styleUrls: ['./quiz-view-select.component.scss']
})
export class QuizViewSelectComponent implements OnInit, AfterViewInit {
  @Input() questionData: any;
  constructor() { }

  ngOnInit() {
    console.log(this.questionData);
  }

  ngAfterViewInit() {
  }
}
