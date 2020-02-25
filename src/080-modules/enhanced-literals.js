const createComputedProperty = () => {
  var f = 'full';
  var l = 'Name';

  return {
    first: 'Jane',
    last: 'Smith',
    [f + l]: 'Jane Smith',
  };
}

const createComputedMethod = () => {
  var f = 'full';
  var l = 'Name';

  return {
    first: 'Jane',
    last: 'Smith',
    [f + l]() {
      return this.first + ' ' + this.last;
    },
  };
}

const propertyValueShorthandUsage = () => {
  var sum = function(a, b) {
    return a + b;
  };
  var multiply = function(a, b) {
    return a * b;
  };

  return {
    sum,
    multiply,
  };
}

const methodDefinitionShorthandUsage = () => {
  return {
    sum(a, b) {
      return a + b;
    },
    multiply(a, b) {
      return a * b;
    }
  }
}

export {
  createComputedProperty,
  createComputedMethod,
  propertyValueShorthandUsage,
  methodDefinitionShorthandUsage,
}
