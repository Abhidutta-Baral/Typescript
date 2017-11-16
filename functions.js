//function in typescript
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(4, 5));
var getSumInAnotherWayWithCondtion = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (num2 == 'string') {
        num2 = parseInt(num2);
    }
    /* if (typeof num1 == 'string' || typeof num2 == 'string') {
         num1 = parseInt(num1)
         num2 = parseInt(num2)
     }*/
    return num1 + num2;
};
console.log(getSumInAnotherWayWithCondtion('5', 6));
var getSumInAnotherWayWithStringConcat = function (firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(getSumInAnotherWayWithStringConcat('Testing', 'String_Concat'));
//void function
function myVoidFunction() {
    console.log("This is the void function");
}
