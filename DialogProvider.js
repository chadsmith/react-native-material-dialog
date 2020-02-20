import * as React from 'react';

import Dialog from './Dialog';
import {Provider} from './context';

export default class DialogProvider extends React.Component {
  constructor(props) {
    super(props);
    this._dialogRef = React.createRef();
  }

  getContext = () => ({
    alert: (title, text, options) => {
      this._dialogRef.current !== null &&
        this._dialogRef.current.alert(title, text, options);
    },
  });

  render() {
    return (
      <Provider value={this.getContext()}>
        <Dialog
          ref={this._dialogRef}
          defaultOptions={this.props.defaultOptions}>
          {React.Children.only(this.props.children)}
        </Dialog>
      </Provider>
    );
  }
}
