/* Классический If/else*/
if (4 == 9) {
    console.log('TRUE')
} else {
    console.log('FALSE')
}
/* Чейн If/else*/
const num = 50;
if (num < 49) {
    console.log('Error')
} else if (num > 100) {
    console.log('Too much')
} else {
    console.log('Ok!')
}
/* Тирнарные выражения If/else*/
const num2 = 50;
(num2 === 50) ? console.log('OK!'): console.log('Error')


/* Switch конструкция - всегда строгое соответствие :числа строки */

const num3 = 50;
switch (num3) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Упсики');
        break;
}