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
import { QuizViewSelectComponent } from '../quiz-view-select/quiz-view-select.component';
import { QuizViewFillComponent } from '../quiz-view-fill/quiz-view-fill.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, AfterViewInit {
  componentRef: any;
  quizType = 'select';
  @ViewChild('quizViewContainer', { read: ViewContainerRef, static: false })
  entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createComponent();
  }
  createComponent() {
    if (this.quizType === 'select') {
      this.entry.clear();
      const selectViewFactory = this.resolver.resolveComponentFactory(
        QuizViewSelectComponent
      );
      const componentRef = this.entry.createComponent(selectViewFactory);
    } else if (this.quizType === 'fill') {
      this.entry.clear();
      const fillViewFactory = this.resolver.resolveComponentFactory(
        QuizViewFillComponent
      );
      const componentRef = this.entry.createComponent(fillViewFactory);
    }
  }

  // destroyComponent() {
  //   console.log(this.componentRef);
  //   this.componentRef.destroy();
  // }
}
