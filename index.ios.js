export default {
  show: () => {
    return new Promise((resolve, reject) => {
      reject('This module is not supported on iOS');
    }
  },
};
