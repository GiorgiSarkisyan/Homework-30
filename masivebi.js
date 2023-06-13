// array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(fruits);
// array pop აშორებს ბოლო ელემენტს მასივიდან
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.pop());
// Array push ამატებს ელემენტს მასივის ბოლოში
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.push("watermelon"));
// Array shift აშორებს პირველ ელემენტს მასივში და დანარჩენ ყველა ელემენტს ინდექსით ერთით უკან წევს (რადგან პირველი ელემენტი აღარ არი)]
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.shift());
// Array unshift ამატებს ელემენტს დასაწყისში
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.unshift());
// Array delete შლის არჩეულ ელემენტს
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits5[0];
// Array concat აერთებს ორ ან რამოდენიმე მასივს
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myboys.concat(myGirls);
console.log(myChildren);
// Array splice შეიძლება გამოყენებული იქნას ახალი ელემენტის დასამატებლად მასივში
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits6.splice(2, 0, "Lemon", "Kiwi"));
// Array slice ჭრის ელემენტს მასივიდან
const fruits7 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits7.slice(1));
// Array splice შეიძლება ასევე იქნას გამოყენებული ელემენტის მოსაშორებლად მასივიდან
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits8.splice(0, 1));
// Array splice - ამ შემთხვევაში როგორც ვშლით - ასევე ვამატებთ
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 2, "Lemon", "Kiwi"));
