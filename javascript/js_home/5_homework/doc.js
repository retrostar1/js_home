let obj = {
    name: "Ivan",
    lastname: "Ivanov",
    age: 25,
    hobby: "painting",
    school: "PGUPS",
}
function info() {
    return (obj);
}
console.log(info());


function checkIfEqual() {
    let arr1 = [1,2,3], arr2 = [1,2,3,4], res = "true";
    if (arr1.length !== arr2.length)
    return false
    
    for(let i=0; i<arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            res = false;
        }
    }
    return res;
}
console.log(checkIfEqual());

function range(a,b,c = 1){
    let res = [];

    for(let i = a; i < b;i += c)
    res.push(i);

    return res
}
console.log(range(1,90,5))

