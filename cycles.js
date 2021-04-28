/* Пока выполняется условие - мы делаем какое то действие*/

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}
/* Do / While */
let num2 = 50;

do {
    console.log(num2);
    num2++;
}
while (num2 <= 55);

/* For */

let num3 = 50;

for (let i = 0; i < 28; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}