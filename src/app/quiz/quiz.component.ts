import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import { ApiService } from '../services/api.service';
import { QuizViewSelectComponent } from '../quiz-view-select/quiz-view-select.component';
import { QuizViewFillComponent } from '../quiz-view-fill/quiz-view-fill.component';
import { QuizViewInputComponent } from '../quiz-view-input/quiz-view-input.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, AfterViewInit {
  componentRef: any;
  token: string;
  quizType = 'input';
  questionData: any = '';
  @ViewChild('quizViewContainer', { read: ViewContainerRef, static: false })
  entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    public apiService: ApiService
  ) {}

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
    console.log('about to get questions...');
    this.apiService.questionNumber = 1;
    this.apiService.getQuestion().subscribe(
      response => {
        this.questionData = response[0];
        console.log(this.questionData);
        console.log(this.questionData);
        this.createComponent(this.questionData);
      },
      err => {
        this.createComponent(this.questionData);
        console.error(err);
      }
    );
  }

  nextQuestion() {
    console.log(this.apiService.questionNumber);
    this.apiService.questionNumber = this.apiService.questionNumber + 1;
    console.log(this.apiService.questionNumber);
    this.apiService.getQuestion().subscribe(
      response => {
        this.questionData = response[0];
        console.log(this.questionData);
        this.createComponent(this.questionData);
      },
      err => {
        console.error(err);
      }
    );
    // location.reload();
  }

  ngAfterViewInit() {

  }
  createComponent(questionData) {
    if (this.quizType === 'select') {
      this.entry.clear();
      const selectViewFactory = this.resolver.resolveComponentFactory(
        QuizViewSelectComponent
      );
      const componentRef = this.entry.createComponent(selectViewFactory);
      componentRef.instance.questionData = this.questionData;
    } else if (this.quizType === 'fill') {
      this.entry.clear();
      const fillViewFactory = this.resolver.resolveComponentFactory(
        QuizViewFillComponent
      );
      const componentRef = this.entry.createComponent(fillViewFactory);
      // componentRef.instance.questionData = questionData;
    } else if (this.quizType === 'input') {
      this.entry.clear();
      const inputViewFactory = this.resolver.resolveComponentFactory(
        QuizViewInputComponent
      );
      const componentRef = this.entry.createComponent(inputViewFactory);
    }
  }

  // destroyComponent() {
  //   console.log(this.componentRef);
  //   this.componentRef.destroy();
  // }
}
