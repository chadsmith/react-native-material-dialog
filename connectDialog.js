import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

import { Consumer } from './context';

export default function connectDialog(WrappedComponent) {
  const ConnectedDialog = props => (
    <Consumer>
      {({ alert }) => (
        <WrappedComponent {...props} alert={alert} />
      )}
    </Consumer>
  );
  return hoistNonReactStatic(ConnectedDialog, WrappedComponent);
}
