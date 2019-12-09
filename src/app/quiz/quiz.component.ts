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

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, AfterViewInit {
  componentRef: any;
  token: string;
  quizType = 'select';
  questionData: any = "sjdbcdjks";
  @ViewChild('quizViewContainer', { read: ViewContainerRef, static: false })
  entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    public apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    console.log(this.token);
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
    }
  }

  // destroyComponent() {
  //   console.log(this.componentRef);
  //   this.componentRef.destroy();
  // }
}
