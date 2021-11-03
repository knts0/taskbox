import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    { itemEnum: 'curry', label: 'カレー' },
    { itemEnum: 'steak', label: 'ステーキ' },
    { itemEnum: 'sushi', label: '寿司' },
  ]
}
