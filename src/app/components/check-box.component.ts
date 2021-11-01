import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check-box',
  template: `
    <mat-checkbox
      class = "checkbox"
      [checked] = "isChecked"
      [disabled] = "isDisabled"
      (change) = "onChange.emit()"
    >
    </mat-checkbox>
  `,
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent implements OnInit {

  @Input() isChecked: boolean
  @Input() isDisabled: boolean

  @Output() onChange = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}
