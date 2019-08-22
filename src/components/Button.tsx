import * as React from 'react';

export namespace Button {
  export interface Props {
    type?: 'primary' | 'default' | 'danger';
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler;
  }
}

class Button extends React.Component<Button.Props> {
  render() {
    const {
      type,
      children,
      onClick,
      style
    } = this.props;

    return (
      <button
        style={style}
        onClick={onClick}
        className={`alert-confirm-button ${type || 'default'}`}
      >
        {children}
      </button>
    )
  }
}

export default Button;
