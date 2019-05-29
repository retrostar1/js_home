let month = prompt("введите порядковый номер месяца: 1 - январь, 2 - февраль и так далее")
switch(month){
    case "12":
    case "1":
    case "2":
        console.log("зима");
    break;
    case "3":
    case "4":
    case "5":
        console.log("весна");
    break;
    case "6":
    case "7":
    case "8":
        console.log("лето");
    break;
    case "9":
    case "10":
    case "11":
        console.log("осень");
    break;
    default:
        console.log("неизвестный сезон");

}

let L = prompt("введите длину отрезка")
let a = prompt("введите единицу измерения, где 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр")

let b;

switch(a){
    case "1": b = 0.1;
    break;
    case "2": b = 1000;
    break;
    case "3": b = 1;
    break;
    case "4": b = 0.001;
    break;
    case "5": b = 0.01;
    default: console.log("введена некорректная единица измерения");
}
result = L * b
console.log("длина вашего отрезка: " + result + " м");


let c = 666;

if (c < -9 && c > -100){
    console.log("отрицательное двузначное число");
} else if(c < -99 && c > -1000) {
    console.log("отрицательное трехзначное число");
} else if(c < 0 && c > -10) {
    console.log("отрицательное однозначное число");
} else if(c < 100 && c > 9) {
    console.log("положительное однозначное число");
} else if(c < 100 && c > 9) {
    console.log("положительное двузначное число");
} else if(c < 1000 && c > 99) {
    console.log("положительное трехзначное число");
} else if(c === 0) {
    console.log("нулевое число");
} else {
    console.log("некорректно введено число");
}

for (let i = 1;i < 101;i++){
    if (i%3 === 0 && i%5 ===0){
        console.log("ThreeFive")
    }
    else if (i%3 === 0){
        console.log("Three")
    } else if (i%5 === 0){
        console.log("Five")
    } else {
        console.log(i)
    }
}

let year = prompt("введите год");
result = ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) ? 
    console.log("високосный") : 
    console.log("не високосный");

let tarelki = prompt("введите количество тарелок");
let sredstvo = prompt("введите количество моющего средства");

while (tarelki > 0 && sredstvo >= 0.5){
    sredstvo -= 0.5;
    console.log(sredstvo);
    tarelki -= 1;
}

if (tarelki === 0){
    console.log ("осталось средства: " + sredstvo);
}

if (sredstvo < 0.5){
    console.log ("осталось тарелок: " + tarelki);
}