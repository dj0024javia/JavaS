console.log('Hello');
// alert('DJ here. Yooo');

// Variables

//var a = "chocolate";
//var num1 = 24
//console.log(a);
//console.log(num1);
//var age = prompt("What is your age??")


var num1 = 10;

num1 = num1 + 15;
console.log(num1)
/*
function fun1(name) {
    
    document.getElementById('TextToBeReplaced').innerHTML = "hello " + name

}
var name = prompt('What is your name')

fun1(name)

*/

let num2 = 0
/*
while(num2 < 100){
    num2++;
    console.log(num2)
}
*/

let fruit = 'banana'

console.log(fruit.length)
console.log(fruit.indexOf('n'))
console.log(fruit.slice(2,5))
console.log(fruit.replace('a','q'))
fruit1 = fruit.split('')
console.log(fruit1)

console.log(fruit1.pop(), fruit1, fruit1.push('abcd'), fruit1, fruit1.shift(), fruit1)
let student = {
    first : 'Dhaval',
    last : 'Javia',
    age: 24,
    height : 165,
    studentInfo : function (){
        return this.first + " " + this.last + this.age + this.height
    }
}

console.log(student.first)
console.log(student.height)
console.log(student.last)
console.log(student.studentInfo())
/*
let age = prompt("What is your age??")

if( (age <= 35) && (age >=18) ){
    console.log("Welcome")
}
else
{
    console.log("Get Out!!")
}
*/

var n1 = 5

switch(n1){
    case 0:
        text = 'Weekend'
        break;
    case 5:
        text = 'Weekend'
        break;
    case 6:
        text = 'Weekend'
        break;
    default:
        text = 'Weekday'
}

console.log(text)