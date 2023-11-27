//Простая реализация без проверок и валидации округления и чего то магического
const personNumbers = [+prompt("Введіть перше число"),+prompt("Введіть друге число"),+prompt("Введіть трете число")];

const averageValue = (personNumbers[0] + personNumbers[1] + personNumbers[2])/personNumbers.length;

alert(averageValue);

/*реализация с помощью reduce */
// let sum = 0;

// sum = personNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, sum);

// const averageValue2 = sum / personNumbers.length;

// alert(averageValue2);

