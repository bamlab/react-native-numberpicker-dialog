import ReactNative from 'react-native';

const RNNumberPickerDialog = ReactNative.NativeModules.RNNumberPickerDialog;

export default {
  show: (options) => {
    return new Promise((resolve, reject) => {
      RNNumberPickerDialog.show(options, resolve, reject);
    });
  },
};
