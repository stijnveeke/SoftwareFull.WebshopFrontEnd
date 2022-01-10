import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-field-error-display',
  templateUrl: './field-error-display.component.html',
  styleUrls: ['./field-error-display.component.css']
})
export class FieldErrorDisplayComponent implements OnChanges {

  @Input() errorMessages: {validator: string, message: string}[];
  @Input() displayErrorFor: {type: string, value: any}[];
  @Input() submitted: boolean;
  @Input() isFieldValid: boolean;
  
  displayError: boolean;
  errorMessage: string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.displayError = false;
     if (this.displayErrorFor.length > 0) {
       this.displayError = true;
       this.errorMessages.map(v => {
          if (v.validator == this.displayErrorFor[0].type) {
            this.errorMessage = v.message;
            return;
          }
       });

       return;
     }

     this.displayError = false;
  }
}
