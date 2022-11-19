var name = prompt ("Ismiz nima ?")
console.log ("Sizni ismiz " + name);

var name1 = prompt ("Otizchi ?")
console.log("Sizi otiz " + name1);

var name2 = prompt ("O'rtolariz nma db chaqiradi ?")
console.log("Sizi o'rtolariz " + name2 + " db chaqiradi ");

var age = +prompt ("Yoshiz nechida")
console.log("Sizni yoshiz " + age + "da");

var age1 = +prompt ("Yoshligizda nechi yosh bo'gansiz ?")
console.log("Siz yoshligizda " + age1 + " yoshda bo'lgan ekansiz");

var misol1 = +prompt("Misolni yeching " + "22+9+6+5+4+2+78+23+21=")

if (misol1==170) {
    console.log("Siz to'g'ri javob berdingiz"); 
} else {
    console.log("Siz noto'g'ri javob berdingiz To'g'ri javob 170"); 
}


var misol2 = +prompt("Bunisini ham yeching " + "999-88-65-42-35-78-65-114=")

if (misol2==512) {
    console.log("Siz to'g'ri javob berdingiz"); 
} else {
    console.log("Siz noto'g'ri javob berdingiz To'g'ri javob 512"); 
}


var misol3 = +prompt("Buni kim yechadi ? yeching " + "3*8*5*6*4*7*6*5=")

if (misol3==604800) {
    console.log("Siz to'g'ri javob berdingiz");
} else {
    console.log("Siz noto'g'ri javob berdingiz To'g'ri javob 604800");
}


var misol4 = +prompt("Kalkulyaturdan foydalanmang " + "98765432102/2=")

if (misol4==49382716051) {
    console.log("Siz to'g'ri javob berdingiz");
} else {
    console.log("Siz noto'g'ri javob berdingiz To'g'ri javob 49382716051"); 
}

var misol5 = +prompt("Jovobini 1 yozgan o'wa bob qosin " + "10%3=")

if (misol5==1) {
    console.log("Siz to'g'ri javob berdingiz");
} else {
    console.log("Siz noto'g'ri javob berdingiz To'g'ri javob 1");
}

var consol = alert("Noto'g'ri jovoblarizi ko'rmoqchi bosez consolga o'tib ko'rasiz!")