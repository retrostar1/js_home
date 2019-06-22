//исправлено

let obj = {
    name: "Ivan",
    lastname: "Ivanov",
    age: 25,
    hobby: "painting",
    school: "PGUPS",
}
function info(c) {
    return c;
}
console.log(info(obj));

//исправлено

let arr1 = [1,2,3,4], arr2 = [1,2,3,4];
function checkIfEqual(a, b) {
    let res = "true";
    if (a.length !== b.length)
    return false
    
    for(let i=0; i<arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            res = false;
        }
    }
    return res;
}
console.log(checkIfEqual(arr1,arr2));



function range(a,b,c = 1){
    let res = [];

    for(let i = a; i < b;i += c)
    res.push(i);

    return res
}
console.log(range(1,90,5))

