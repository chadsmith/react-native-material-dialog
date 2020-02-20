HOC and hook based versions of [react-native-material-dialog](https://github.com/hectahertz/react-native-material-dialog)

## Getting started

`npm install react-native-material-dialog --save`

## Example usage

- [Component](https://github.com/chadsmith/react-native-material-dialog#component)
- [HOC](https://github.com/chadsmith/react-native-material-dialog#hoc)
- [hook](https://github.com/chadsmith/react-native-material-dialog#hook)

## Component

Basic and customizable dialog that can hold any component.

```jsx
import {MaterialDialog} from 'react-native-material-dialog';

<MaterialDialog
  title="Use Google's Location Service?"
  visible={this.state.visible}
  onOk={() => this.setState({visible: false})}
  onCancel={() => this.setState({visible: false})}>
  <Text style={styles.dialogText}>
    Let Google help apps determine location. This means sending anonymous
    location data to Google, even when no apps are running.
  </Text>
</MaterialDialog>;
```

### Props

| Name            | Description                                                        | Default/Required      | Type    |
| --------------- | ------------------------------------------------------------------ | --------------------- | ------- |
| visible         | shows or hides the dialog                                          | required              | bool    |
| children        | element to be rendered in the content of the dialog                | required              | element |
| onCancel        | callback when the dialog is closed or the cancel action is pressed | required              | func    |
| onOk            | callback when the ok action is pressed                             | undefined             | func    |
| cancelLabel     | label for the cancel action                                        | 'CANCEL'              | string  |
| okLabel         | label for the ok action                                            | 'OK'                  | string  |
| title           | text for the dialog title                                          | undefined             | string  |
| titleColor      | color of the dialog title                                          | 'rgba(0, 0, 0, 0.87)' | string  |
| backgroundColor | color of the dialog background                                     | '#FFFFFF'             | string  |
| colorAccent     | color of the action text                                           | '#51BC78'             | string  |
| scrolled        | whether the form is in scrolled mode                               | false                 | bool    |
| addPadding      | automatically add paddings to the content                          | true                  | bool    |

## HOC

Wraps component with dialog which can be called via props.

```jsx
import {useCallback}, React from 'react';
import {connectDialog} from 'react-native-material-dialog';

function App({alert}) {
  const onPress = useCallback(() => {
    alert(title, text, dialogOptions)
      .then(okPressed => {
        if(okPressed) {

        }
        else {

        }
      });
  }, [alert]);
  return (
    <Button onPress={onPress}>Show Alert</Button>
  );
}

export default connectDialog(App);
```

## Hook

Wraps app with provider which can call dialog via context.

```jsx
import {useDialog} from 'react-native-material-dialog';

export default function App() {
  const alert = useDialog();
  /* ... */
}

export default App;
```

```jsx
import {DialogProvider} from 'react-native-material-dialog';

class AppContainer extends React.Component {
  render() {
    return (
      <DialogProvider defaultOptions={dialogOptions}>
        <App />
      </DialogProvider>
    );
  }
}
```

### dialogOptions

| Name            | Description                               | Default/Required      | Type   |
| --------------- | ----------------------------------------- | --------------------- | ------ |
| cancelLabel     | label for the cancel action               | 'CANCEL'              | string |
| okLabel         | label for the ok action                   | 'OK'                  | string |
| titleColor      | color of the dialog title                 | 'rgba(0, 0, 0, 0.87)' | string |
| backgroundColor | color of the dialog background            | '#FFFFFF'             | string |
| colorAccent     | color of the action text                  | '#51BC78'             | string |
| scrolled        | whether the form is in scrolled mode      | false                 | bool   |
| addPadding      | automatically add paddings to the content | true                  | bool   |
| style           | style of dialog text                      | false                 | object |

## License

- [MIT](LICENSE)
