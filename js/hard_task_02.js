'use strict';

const getMinNumbers = () => {
  const firstNum = prompt('Введите первое число?');
  const secondNum = prompt('Введите второе число?');

  return (firstNum > secondNum) * secondNum + (secondNum > firstNum) * firstNum;
}

alert(`Минимальное число: ${getMinNumbers()}`);
