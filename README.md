> A react component confirm dialog. （一个react的弹窗组件，支持 alert、confirm）

### Installing（安装）

```
yarn add react-alert-confirm
// or
npm install react-alert-confirm --save
```

### Example（例子）
```
import alertConfirm, { alert } from 'react-alert-confirm';
import 'react-alert-confirm/dist/index.css';

// Confirm
alertConfirm({
  title: 'Title',
  content: 'Content',
  onOk: () => {
    console.log('ok')
  },
  onCancel: () => {
    console.log('cancel')
  }
})

// Alert
alertConfirm({
  type: 'alert',
  ...
})
// or
alert({
  ...
})
```

### Options（选项）
```
{
  // 弹窗的类型
  type?: 'alert' | 'confirm';
  
  // 弹窗标题
  title?: React.ReactNode;
  
  // 弹窗内容
  content?: React.ReactNode;
  
  // 弹窗底部 用于自定义底部按钮
  footer?: React.ReactNode;

  // 弹层的 z-index 默认为1000
  zIndex?: number = 1000;
  
  // 点击确认的回调
  onOk: { (): void };
  
  // 点击取消或者关闭弹窗的回调
  onCancel: { (): void };
  
  // 关闭弹窗之前的回调（此方法会导致 onOk 和 onCancel 失效）
  closeBefore?: {
    /**
     * @params action 触发关闭的来源，默认（ok: 确认按钮 | cancel: 取消按钮 | close: 关闭按钮）
     * @params closePopup 关闭弹窗的方法
     */
    (action: string | number, closePopup: { (): void }): void
  };
}
```

### Instance（实例）

```
import alertConfirm, { alert } from 'react-alert-confirm';
import 'react-alert-confirm/dist/index.css';

const instance = alertConfirm({ ... }):

{
  container: Element;
  title?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  type: 'confirm' | 'alert';
  zIndex: number;
  status: 'mount' | 'unmount';
  onOk: { (): void };
  onCancel: { (): void };
  closeBefore: {
    (action: string | number, closePopup: { (): void }): void
  };
  
  // 触发事件，传入自定义的 action，会在 closeBefore 中第一个参数返回
  dispatch: {
    (action: string | number): void;
  };
  
  // 关闭当前实例弹窗
  closePopup: { (): void };
  
  // 重新渲染当前实例
  render: { (): void };
}
```

### Advanced（高级用法）
```
import alertConfirm, { Button } from 'react-alert-confirm';
import 'react-alert-confirm/dist/index.css';

// 提供按钮组件方便样式统一
const instance = alertConfirm({
  title: 'Title',
  content: 'Content',
  footer: (
    <Button onClick={() => instance.dispatch('hello')}>
      Hello
    </Button>
  ),
  closeBefore(action, close) {
    switch (action) {
      case 'close':
        // ...
        break;
      case 'hello':
        // ...
        break;
    }
    close() // close popup
  }
})
```
