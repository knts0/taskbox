import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'

import { action } from '@storybook/addon-actions';

import { BalloonMenuComponent } from "./balloon-menu.component";

export default {
  component: BalloonMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [BalloonMenuComponent],
      imports: [CommonModule, MatButtonModule, MatMenuModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Balloon menu',
} as Meta;

export const actionsData = {
  selectItem: action('selectItem'),
};

type Food = 'curry' | 'steak' | 'sushi'

const Template: Story<BalloonMenuComponent<Food>> = args => ({
  props: {
    ...args,
    selectItem: actionsData.selectItem,
  },
});

// 未選択
export const Default = Template.bind({});
Default.args = {
  items: [
    { itemEnum: 'curry', label: 'カレー' },
    { itemEnum: 'steak', label: 'ステーキ' },
    { itemEnum: 'sushi', label: '寿司' },
  ]
};

// curryを選択
export const Checked = Template.bind({});
Checked.args = {
  selectedItem: 'curry',
};
