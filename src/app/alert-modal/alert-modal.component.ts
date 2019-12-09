import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input
} from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

declare var $: any;

@Component({
  selector: "app-alert-modal",
  templateUrl: "./alert-modal.component.html",
  styleUrls: ["./alert-modal.component.scss"]
})
export class AlertModalComponent implements OnInit, AfterViewInit {
  @ViewChild('app-alert-modal', { static: false }) appAlertModal: ElementRef;
  @Input() responseData: any;
  @Input() responseState: any;
  @Input() redirect: string;
  @Input() redirectCount: number;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // console.log(this.responseData);
    // this.showModal();
  }
  // showModal() {
  //   if (this.responseState !== '') {
  //     $('#alertModal').modal('show');
  //     console.log(this.responseState);
  //   }
  // }
}
