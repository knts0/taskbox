import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';

/**
 * component: コンポーネント自体
 * title: Storybook のサイドバーにあるコンポーネントを参照する方法
 * excludeStories: ストーリーファイルのエクスポートのうち、Storybook にストーリーとして表示させたくないもの
 */
export default {
  component: TaskComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*Data$/,
  title: 'Task',
} as Meta;


// action(): クリックされたときにStorybook の画面の actions パネルに表示されるコールバック
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

// ストーリーを割り当てる用の単一のTemplate変数。
// ストーリーとは：特定の状態で描画された要素 (例えば、プロパティを指定したコンポーネントなど)
// を返す関数で、関数コンポーネントのようなもの
const Template: Story<TaskComponent> = args => ({
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

// Template.bind({}) は関数のコピーを作成する JavaScript の標準的な テクニックで、
// 同じ実装を使いながら、エクスポートされたそれぞれのストーリーに独自のプロパティを設定することができます。

// デフォルト
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

// 固定
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

// アーカイブ
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
