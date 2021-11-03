import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface MenuItem<T> {
  itemEnum: T
  label: string
}

@Component({
  selector: 'app-balloon-menu',
  templateUrl: './balloon-menu.component.html',
  styleUrls: ['./balloon-menu.component.scss']
})
export class BalloonMenuComponent<T> implements OnInit {

  @Input() items: MenuItem<T>[]
  @Input() selectedItem?: MenuItem<T>

  @Output() selectItem = new EventEmitter<T>();

  constructor() { }

  ngOnInit(): void {
  }

}
