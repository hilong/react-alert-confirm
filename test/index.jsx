import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import confirm, { Button, alert, asyncConfirm } from '../dist/index';
import { Fragment } from 'react';
import '../dist/index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClickConfirm}>
          Confirm
        </Button>
        <Button style={{ marginLeft: 10 }} onClick={this.handleClickAlert}>
          Alert
        </Button>
        <Button type="danger" style={{ marginLeft: 10 }} onClick={this.handleClickDanger}>
          Danger
        </Button>
        <Button style={{ marginLeft: 10 }} type="primary" onClick={this.handleClickAsync}>
          Async Confirm
        </Button>
      </div>
    );
  }

  handleClickConfirm = () => {
    const instance = confirm({
      title: '提示',
      content: '这是 Confirm，支持ReactNode',
      language: 'en',
      onOk: () => {
        console.log('ok', instance);
      },
      onCancel: () => {
        console.log('cancel', instance);
      }
    });
  };

  handleClickAlert = async cb => {
    const instance = await alert(<span>这是 Alert ，支持ReactNode</span>).async();
    console.log(instance);
    if (cb instanceof Function) cb();
  };

  handleClickDanger = () => {
    confirm({
      title: '警告',
      content: '此操作将删除该任务，请确认！',
      footer: dispatch => (
        <Fragment>
          <Button onClick={() => dispatch('cancel')}>取 消</Button>
          <Button onClick={() => dispatch('ok')} type="danger">
            删 除
          </Button>
        </Fragment>
      ),
      closeBefore: (action, close) => {
        if (action === 'cancel') {
          this.handleClickAlert(close);
        } else {
          close();
        }
      }
    });
  };

  handleClickAsync = async () => {
    const instance = await asyncConfirm({
      content: '这是一个异步弹窗！',
      footer: dispatch => (
        <Button onClick={() => dispatch('hello')} type="primary">
          按 钮
        </Button>
      ),
      closeBefore(action, close) {
        if (action === 'hello') {
          this.resolve(this);
        } else {
          this.reject(this);
        }
        close();
      }
    });
    console.log(instance);
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
