import * as React from 'react';
import {Text} from 'react-native';

import MaterialDialog from './MaterialDialog';

export default class Dialog extends React.Component {
  state = {
    onCancel: () => {},
    onOk: () => {},
    options: {},
    text: null,
    title: null,
    visible: false,
  };

  alert = (title, text, options = {}) =>
    new Promise(resolve =>
      this.setState({
        onCancel: () => this.setState({visible: false}, () => resolve(false)),
        onOk: () => this.setState({visible: false}, () => resolve(true)),
        options,
        text,
        title,
        visible: true,
      }),
    );

  render() {
    const {onCancel, onOk, options = {}, text, title, visible} = this.state;
    const defaultOptions = this.props.defaultOptions || {};
    const dialogOptions = {
      ...defaultOptions,
      ...options,
    };
    const {style, ...rest} = dialogOptions;
    return (
      <>
        {React.Children.only(this.props.children)}
        {visible && (
          <MaterialDialog
            {...rest}
            onOk={onOk}
            onCancel={onCancel}
            title={title}
            visible>
            <Text style={style}>{text}</Text>
          </MaterialDialog>
        )}
      </>
    );
  }
}
