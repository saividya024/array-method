var names=["vidya","siri","sharath","radha","shankar","chenna"]
var length=names.length
console.log(length)
// o/p:-6
names.push("kannaya","santhu","chinku")
console.log(names)
// o/p:-['vidya', 'siri', 'sharath', 'radha', 'shankar', 'chenna', 'kannaya', 'santhu', 'chinku']
names.pop()
console.log(names)
// o/p:-['vidya', 'siri', 'sharath', 'radha', 'shankar', 'chenna', 'kannaya', 'santhu']
names.unshift("Ammu","Anu")
console.log(names)
// o/p:-['Ammu', 'Anu', 'vidya', 'siri', 'sharath', 'radha', 'shankar', 'chenna', 'kannaya', 'santhu']
names.shift
console.log(names)
// o/p:-['Ammu', 'Anu', 'vidya', 'siri', 'sharath', 'radha', 'shankar', 'chenna', 'kannaya', 'santhu']

var reverse=names.reverse();
console.log(names)
//o/p:-['santhu', 'kannaya', 'chenna', 'shankar', 'radha', 'sharath', 'siri', 'vidya', 'Anu', 'Ammu']
console.log(names.indexOf("rupa"))
// o/p:--1
console.log(names.includes("paramesh"))
// o/p:-
var sort=names.sort();
console.log(sort)
// o/p:-['Ammu', 'Anu', 'chenna', 'kannaya', 'radha', 'santhu', 'shankar', 'sharath', 'siri', 'vidya']
var str=["tv","laptop","mobile"]
console.log(str.join())
// o/p:-tv,laptop,mobile

var str1=["grapes","mango","banana","apple","orange"]
console.log(str1)
//['grapes', 'mango', 'banana', 'apple', 'orange']
str1.push("papaya","guava")
console.log(str1)
//['grapes', 'mango', 'banana', 'apple', 'orange', 'papaya', 'guava']
str1.shift()
console.log(str1)
// o/p:- ['mango', 'banana', 'apple', 'orange', 'papaya', 'guava']
var reverse=str1.reverse();
console.log(reverse)
//['guava', 'papaya', 'orange', 'apple', 'banana', 'mango']
console.log(reverse.join())
// o/p:-guava,papaya,orange,apple,banana,mango

var str2=["whatsapp","instagram","twitter","snapchat"]
console.log(str2.sort())
//['instagram', 'snapchat', 'twitter', 'whatsapp']
var reverse_str2=str2.pop()
console.log(reverse_str2)
// o/p:-whatsapp

var fruits=["grapes","mango","banana","apple","orange"]
console.log(fruits)
// ['grapes', 'mango', 'banana', 'apple', 'orange']
fruits.unshift("papaya","guava")
console.log(fruits)
// ['papaya', 'guava', 'grapes', 'mango', 'banana', 'apple', 'orange']
fruits.shift()
console.log(fruits)
//['guava', 'grapes', 'mango', 'banana', 'apple', 'orange']
console.log(fruits.length)
// o/p:-6

var fruits1=["grapes","mango","banana","apple","orange"]
var names1=["anirudh","nikil","nandhu","swapna","puppy"]
var combine=fruits1.concat(names1)
console.log(combine)
//['grapes', 'mango', 'banana', 'apple', 'orange', 'anirudh', 'nikil', 'nandhu', 'swapna', 'puppy']
console.log(combine.sort())
//['anirudh', 'apple', 'banana', 'grapes', 'mango', 'nandhu', 'nikil', 'orange', 'puppy', 'swapna']
console.log(combine.pop())
// o/p:-swapna

