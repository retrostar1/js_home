let str = "538754089", sum = 0;
for (let i = 0; i < str.length; i++)
sum += parseInt(str[i]);
console.log(sum);

let str2 = "я читаю книжки брэдберри раз в год", symb = "и", emptyStr = "";
for (let i=0; i < str2.length; i++) {
    emptyStr += str2[i]
    if (str2.charCodeAt(i) === symb.charCodeAt()){
    emptyStr += symb
    }
}
console.log(emptyStr)

let password = prompt('введите пароль');
reg = /[[a-z][A-Z][^$.|?*+().][0-9]{2}]{9,}/g;
if (reg.test(password)){
    alert("Пароль введен верно!");
} else {
    alert("Вы неправильно ввели пароль!");
}



