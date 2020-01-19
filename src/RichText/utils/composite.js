// @flow

function composite(defaultFunc, customFunc) {
  return input => {
    if (customFunc) {
      let result = customFunc(input);
      if (result != null) {
        return result;
      }
    }
    return defaultFunc(input);
  };
}

export default composite;
