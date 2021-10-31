import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox'

import { action } from '@storybook/addon-actions';

import { CheckBoxComponent } from "./check-box.component";

export default {
  component: CheckBoxComponent,
  decorators: [
    moduleMetadata({
      declarations: [CheckBoxComponent],
      imports: [CommonModule, MatCheckboxModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Checkbox',
} as Meta;

// action(): クリックされたときにStorybook の画面の actions パネルに表示されるコールバック
export const actionsData = {
  onChange: action('onChange'),
};

// ストーリーを割り当てる用の単一のTemplate変数。
// ストーリーとは：特定の状態で描画された要素 (例えば、プロパティを指定したコンポーネントなど)
// を返す関数で、関数コンポーネントのようなもの
const Template: Story<CheckBoxComponent> = args => ({
  props: {
    ...args,
    onChange: actionsData.onChange,
  },
});

// デフォルト（チェックoff）
export const Default = Template.bind({});
Default.args = {
  isChecked: false,
  isDisabled: false,
};

// チェックon
export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
  isDisabled: false,
};

// 非活性
export const Disabled = Template.bind({});
Disabled.args = {
  isChecked: true,
  isDisabled: true,
};
