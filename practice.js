// How do you add an element to the end of an array?
var a = ["Durga"];
a.push("Bhavani");
console.log(a);

// How do you remove the last element from an array?
var a = ["Durga", "Bhavani", "kalisetti"];
// var a1=["bhavani"]
a.pop();
console.log(a);

// How do you add an element to the beginning of an array?
var a1 = ["a,b,c,d"];
a1.unshift("lowercase");
console.log(a1);

// How can you remove the first element from an array?
var a2 = ["Apple", "oranges", "mangos", "banana"];
a2.shift();
console.log(a2);

// How do you reverse the elements in an array?
let str = [1, 2, 3, 4, 5];
str.reverse();
console.log(str);

// How can you find the index of a specific value in an array?
var a1 = ["happy", "unhappy", "lucky", "unlucky"];
var indexofvalue = a1.indexOf(-1);
console.log(a1);
console.log(indexofvalue);

// How can you check if a certain value exists in an array?
var a = ["1, 2, 3, 4, 5"];
console.log(a.includes(30));
//  console.log(a.includes(0));

// How can you sort the elements of an array in ascending order?
let string = ["Bhavani", "Anush", "Chandini"];
string.sort();
console.log(string);

// How can you convert an array to a string using commas as separators?
let strr = [1, 2, 3, 4, 5];
let resultstr = strr.join("");
console.log(resultstr);

// "Write a code snippet that adds an element to the end of an array, then removes the first element.
var Names = ["Kalisetti", "Durga", "bhavani"];
Names.push("divya");
Names.shift();
console.log(Names);

// How can you reverse an array and then join the elements into a string?
var a = ["hello", "how", "are", "you"];
var b = a.reverse();
console.log(b);
var c = b.join("");
console.log(c);

// Write a code that first sorts an array in ascending order, then removes the last element.
var strr1 = ["Banana", "Apple", "Dog", "Cat"];
strr1.sort();
strr1.pop();
console.log(strr1);

// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var Numbers = [5, 6, 7];
Numbers.unshift(1, 2, 3, 4);
Numbers.shift();
Numbers.length;
console.log(Numbers);

// How do you combine two arrays, sort the combined array, and then remove the last element?
var str3 = ["durga", "Bhavani", "Amma"];
var str4 = ["kalisetti"];
var str4 = str3.concat(str4);
console.log(str4);
str4.pop();

// function bhavani(){
//     console.log("bhavani")
// }
// bhavani()

// function a(x,y){
//     console.log(x*y)
// }
// a(5,4)


// function a(t) {
//   console.log("a function")
//   t()
// }

// a(function b() {
//   console.log("b function")
// })


// console.log("coffee order")
// setTimeout(function(){
//     console.log("coffee ready !!!")
// },1000)
// console.log("meanwhile having samosa with my friend with my friends money")

// var promise=new Promise((resolve,reject)=>{
//    if(true){
//     resolve("successful")
//    }else{
//     reject("reject")
//    }
// })
// console.log(promise)
var product=["watch","bike","belt","earbuds","laptops","mobiles"]
function addTocart(){
   var input=prompt("enter your product")

   if(input){
    for(elem of product){
        var itemFound=false;
        if(input == elem){
            console.log(`you have added ${input} item to the cart`)
        itemFound=true;
        break;
        }
    }
}
    if (!itemFound) {
      alert(`we dont have ${input} item in our basket`);
    } 
}

var car={
    make:"Toyota",
    model:"camry",
    Year:2023
}
// Object.freeze(a);
car.color="black";
console.log(Object.freeze(car));
car.color="grey";

var user={
    name:"Bhavani",
    age:"21",
    email:"bhavanidurga579@gmail.com"
}
Object.freeze(user);
console.log(Object.isFrozen(user));

var product={
    name:"laptop",
    category:"electronic",
    price:60000
}
product.model="i5 8gb";
// Object.seal(product);
console.log(Object.isSealed(product));

var laptop={
    brand:"lenovo",
    model:"i5 12th gen",
    price:"60000"
}
//   Object.keys(laptop);
  console.log(Object.keys(laptop));

  var house={
    location:"RJY",
    size:"500cents",
    price:"60,00000"
  }
  console.log(Object.values(house));

  var smartphone={
    brand:"MI",
    model:"redminote9",
    price:"15000"

}
product.price="20000";
Object.seal(product);
console.log(Object.isSealed(product));

var book={
    title:"mahabharatham",
    author:"ved vyasa",
    publishedyear:"3rd century BCE"
}
Object.freeze(book);
book.publishedyear="2rd century BCE";
console.log(Object.isFrozen(book));

var person={
    firstName:"Kalisetti",
    lastName:"Durga Bhavani",
    age:21
}
Object.keys(person);
 Object.values(person);
console.log(Object(person));

var course={
    title:"full stack development",
    instructor:"vamsi sir",
    duration:"6 months"
}
delete course.duration;
console.log(Object.entries(course));

var employee={
    name:"bhavani",
    position:"Full stack development",
    salary:4500
}
console.log(Object.seal(employee));
employee.position="Frontend developer"
// console.log(Object.seal(employee));
