var fast = require('../lib'),
    history = require('../test/history');

var input = function (a, b, c) {
  return a + b + c;
};

var nativeBound = input.bind(undefined, 1, 2);
var fastPartial = fast.partial(input, 1, 2);
var fastPartial_0_0_0 = history.partial_0_0_0(input, 1, 2);

exports['Function::bind()'] = function () {
  return nativeBound(3);
};

exports['fast.partial()'] = function () {
  return fastPartial(3);
};

exports['fast.partial() v0.0.0'] = function () {
  return fastPartial_0_0_0(3);
};
