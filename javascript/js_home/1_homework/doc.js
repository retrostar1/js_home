let square = 10 * 100;
let garden = 15 * 25;
console.log(square - garden);

let oval_1 = 15 * 100;
let oval_2 = 600;
console.log(oval_1 - oval_2);


let a = 8, b = 53, c = 989;
let res = (a<b)?
    (a<c)? "a наименьшее число" : "c наименьшее число" :
    (b<c)? "b наименьшее число" : "c наименьшее число";
console.log(res);

let m = 6.94, n = 13.56
let m_res = Math.abs(parseFloat(m) - 10), n_res = Math.abs(parseFloat(n) - 10);
let result = (m_res > n_res) ? n : m;
console.log(result);

let a_x = 0, a_y = 0, a_z = 2;
let b_x = 3, b_y = 0, b_z = 0;
let c_x = 0, c_y = 0, c_z = 0;

let a_b = (b_x-a_x) * (b_x-a_x) + (b_y-a_y) * (b_y-a_y) + (b_z - a_z) * (b_z - a_z);
let b_c = (c_x-b_x) * (c_x-b_x) + (c_y-b_y) * (c_y-b_y) + (c_z - b_z) * (c_z - b_z);
let c_a = (a_x-c_x) * (a_x-c_x) + (a_y-c_y) * (a_y-c_y) + (a_z - c_z) * (a_z - c_z);

let res2 = (a_b === b_c + c_a || b_c === a_b + c_a || c_a === a_b + b_c)?
"треугольник прямоугольный" : "треугольник непрямоугольный";
console.log(res2)
console.log(a_b)
console.log(b_c)
console.log(c_a)









    


