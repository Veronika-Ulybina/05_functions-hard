'use strict';

const calcGreatestCommonDivisor = (a, b) => {

  while (a !== 0 && b !== 0 ) {

    if (a > b) {
      a = a % b;
    } else if (b > a) {
      b = b % a;
    }
  }

  return b || a;
}

console.log(calcGreatestCommonDivisor(70, 8));
