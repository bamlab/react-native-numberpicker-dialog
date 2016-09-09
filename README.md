# react-native-numberpicker-dialog

Show an Android modal dialog with a list of choices displayed using a `android.widget.NumberPicker`.

![Android modal dialog with a list of choices displayed using a `android.widget.NumberPicker`](docs/preview.png)

This is only for Android. There is the built-in [React Native Picker component](https://facebook.github.io/react-native/docs/picker.html) for iOS. It works for Android too, but display a dialog (or dropdown) with a long list of choices that can be confusing.

## Setup

Install the package with React Native:
```
react-native install react-native-numberpicker-dialog
```

## Usage example

```javascript
import NumberPickerDialog from 'react-native-numberpicker-dialog';

NumberPickerDialog.show({
  values: ['First item', 'Second item', 'Third item'],
  positiveButtonLabel: 'Ok',
  negativeButtonLabel: 'Cancel',
  message: 'What would you like to have?',
  title: 'Nice dialog',
}).then((id) => {
  // id is the index of the chosen item, or -1 if the user cancelled.
});
```

## Other open-source modules by the folks at [BAM](http://github.com/bamlab)

 * [react-native-image-resizer](https://github.com/bamlab/react-native-image-resizer)
 * [rn-camera-roll](https://github.com/bamlab/rn-camera-roll)
 * [react-native-animated-picker](https://github.com/bamlab/react-native-animated-picker)
 * [cordova-plugin-native-routing](https://github.com/bamlab/cordova-plugin-native-routing)
