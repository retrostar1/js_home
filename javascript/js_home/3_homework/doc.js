let a = [ 12, 4, 3, 10, 1, 20 ], b = [-3, -7, -100, -33];
let c = a.concat(b);//или наоборот
console.log(c);

let area = [0, null, null, 1, 1, null, 0, null, 0];
//дурацкий код получается
for (let i=0; i < area.length; i++){
    if (area[i] === 0) {
        document.write("0 ");
    } else if(area[i] === 1) {
        document.write("X ");
    } else document.write("- ");
 let table = `<table>
            <tr>
                <td> ${area[0], area[1], area [2]}</td>
                <td> ${area[3], area[4], area [5]}</td>
                <td> ${area[6], area[7], area [8]}</td>
            </tr>
        </table>`
};
document.write(table);


let arr = [12,4,3,10,1,20];
let min = arr[0], max = arr[0];

for (let i=0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
    
}

let minNumber = arr.indexOf(min), maxNumber = arr.indexOf(max);
arr.splice(minNumber, 1);
arr.splice(maxNumber-1, 1);
console.log(arr);//запуталась, как по другому удалить максимальное, если оно теперь убегает


//а с такой вариант невозможно доработать так, чтобы он работал, да?
// let arr2 = [0,0,0,0,0,0], index = 0;

// for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < 10; j++) {
//         arr2[i] = j;
//         let firstSum = arr2[0]+arr2[1]+arr2[2], secSum = arr2[3]+arr2[4]+arr2[5]
//         if (firstSum === secSum){
//             index++;
//         }
//     }
// }
// console.log(index);

let index = 0;
for (let i = 0; i < 1000000; i++) {
    let arr2 = i.toString().padStart(6, '0'), arrFull = arr2.split(''), 
    firstSum = parseInt(arrFull[0])+parseInt(arrFull[1])+parseInt(arrFull[2]), secSum = parseInt(arrFull[3])+parseInt(arrFull[4])+parseInt(arrFull[5]);
    if (firstSum === secSum) {
        index++;
    }
}
console.log("счастливых билетиков получилось " + index);