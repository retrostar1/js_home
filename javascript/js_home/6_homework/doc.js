// Реализовать функцию foo:
// let a = {
//     name: 'static',
//     count: 0
// }
// console.log(foo(a, 'count', 10); /* В консоль выведет: [{name:'static', count:0},
//  {name:'static', count:1}, ..., {name:'static', count:9}] */

let smth = {
    name: 'static',
    count: 0
}, smth2 = [];

function foo(a,b,c){

    for (let i=0; i < c; i++) {
        let hi = Object.assign({}, a);
        hi[b] = i;
        smth2.push(hi)
    }
    return smth2;
    
}
console.log(foo(smth, 'count', 10));


// 2. Сделайте функцию, каждый вызов который будет генерировать одно случайное число 
// от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
// числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
// хранится массив чисел, которые уже были сгенерированы функцией.


let arr1 = [];

function randomGenerator(){
    

    function genNum(){
    return num = Math.floor(Math.random()*100);
    }
    
    function addNum(){
    if (!arr1.includes(genNum()))
    arr1.push(num)

    return arr1
    }
}
    console.log(randomGenerator())






// 3. Построить объект студент:
// - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// - метод объекта выводящий в консоль биографическую справку в виде, например: 
// «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.


let obj = {
    name: "Ivan",
    lastname: "Ivanov",
    age: 25,
    hobby: "painting",
    school: "PGUPS",
    printInfo: function(){
        console.log(this.name + " " + this.lastname + ". " + this.age + " год/лет. Интересы: " + this.hobby + ". Учится в " + this.school)
    }
}
obj.printInfo();



// 4. Написать функцию вычисляющую факториал числа с использованием рекурсии.
// Факториал числа - это число, умноженное на себя минус один, затем на себя 
// минус два и так далее, до единицы. Обозначается n!
// Определение факториала можно записать как: n! = n * (n - 1) * (n - 2) * ...*1



function factorial(n) {
    if (n > 1) {
        return n * factorial(n-1) 
    } else {
        return n
    }
}
console.log(factorial(6));




// 5. Отсортировать массив по полю 'price' используя метод sort и передаваемую ей функцию, 
// определяющую порядок сортировки. Массив для тестирования: 
// let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, 
// { 'price' : 8, 'count' : 5 }, { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4},];


let arr = [ { 'price' : 10, 'count' : 2 }, { 'price' : 5, 'count' : 5}, { 'price' : 8, 'count' : 5 },
 { 'price' : 12, 'count' : 4 }, { 'price' : 8, 'count' : 4}];

 function byField(field) {
    return function(a, b) {
      return a[field] > b[field] ? 1 : -1;
    }
  };

 arr.sort(byField('price'));
 console.log(arr);


