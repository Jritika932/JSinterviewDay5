// Given an array of 0's and 1's find out number of 0's
let array = [1,1,1,0,0];
let length = array.length;
let count = 0;
for(i = 0; i<length; i++){
    if(array[i]==0){
        count = count + 1;
    }
}
console.log(count);

// Given an array find out total no. of odd and even nos.
let array1 = [1,2,3,4,5,6];
let length1 = array1.length1;
var even = 0;
var odd = 0;
for(let i=0 ; i<length ; i++){
    if(array1[i]%2==0){
        even = even + 1;
    }
    else{
        odd = od + 1;
    }
}
console.log(even,odd);

// Given a string find out number of vowels 
function findVowels(str){
    let length2 = str.length;
    let count3 = 0;
    for( i = 0; i<length2 ; i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count3 = count3 + 1
        }
    }
    console.log(count3);

}
findVowels("ritika");

// Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same
object = {name: "ritika", 
         age: 23}
array =["ritika", 23]
console.log(object)
console.log(array)
function myname() {
  const object1Length = Object.keys(object).length;
  const object2Length = Object.keys(array).length;

  if (object1Length == object2Length){
    return Object.keys(object1Length).every(
      key => object2.hasOwnProperty(key) && object2[key] == object1[key])
  }
  return false
}
console.log(myname())
