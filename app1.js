// function converter(feet) { //Conversion rate of feet to inches is 12inches
//     const inches = feet *12;
//     return inches;
    
//     }
//     const inchesValue = converter(6);
//     console.log(inchesValue);

    // for(let num = 0; num <= 10; num =num +1){
    //     if(num % 2 === 0)
    //     {
    //         console.log(num +" is an Even number")
    //     }
    // }

    // for(let num = 2; num<=24; num = num+1){
    //     console.log(num + num)
    // }




//creating a multiplication table
// let number = 2;
// let range =24;
// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

const vowels = ["a", "e", "i", "o", "u"]

function countVowelsIterative(text) {
  let counter = 0

  for (let letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      counter++
    }
  }

  console.log(`The text contains ${counter} vowel(s)`)

  return counter
}
countVowelsIterative("roli")

// let array = [18, -42, 21, 6, -50];
// array = array.filter(function(x)
//  { return x < -1; });
// console.log(array);


// const array = [1, 2, 9 , 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);


// const myObject = {
//     name:'Camry',
//     colour:'red',
//     Year:2020
// }
// const json= JSON.stringify(myObject)
// console.log(JSON.parse(json))



// const book ={
//     title:'The Audactiy of Hope',
//     description:'Thought of Reclaiming the American Dream',
//     numberOfPages:362,
//     authour:'Barack Obama',
//     reading:'true',
//    toggleReadingStatus: function(){
//     if(book.reading=== false){
//         book.reading=true
//     }else{
//         book.reading=false
//     }
//    } 
// }
// book.toggleReadingStatus()
// console.log(book.reading)



// const person={
//     name:'Nick',
//     age: 24,
//     sibling:['Femi','Roda','Lola'],
//     addSibling: function(name){
//         person.sibling.push(name)
//     }    
//     }
//     person.addSibling('Tola')
//     console.log(person)

    // const person1={
    //     name:'Nickolas',
    //     age: 241,
    //     sibling:[
    //         {
    //             name:'Felix',
    //             age:23,
    //         },{
    //             name:'Tomori',
    //             age:34,
    //         }

            
    //     ],
    //     addSibling: function(name,age){
    //         this.sibling.push([
    //             {name},{age}
    //         ])

    //     }
    //     }
    //     person1.addSibling({
    //         name:'Tunde',
    //         age:900,
    //     })
    //     console.log(person1)
       



// //Object
// const myObject= {name:'Car', color:'Purple', price:2000000}
// console.log(myObject.color)

// const emptyArray = ['dollar','pound','Euro']
// emptyArray.push('mobile test',455,'selenium', 'cypress')
// emptyArray.pop()
// console.log(emptyArray)

// const myFriends = ['Steve','Omoni','Lanre','Roli','Tejiri']
// const element= myFriends[4]
// myFriends[4] = 667
// console.log(myFriends)


// const myGreet = function (name){
//     console.log('good evening ' + name)
// }

// myGreet("OLAMIDE")

// function addnumber(firstNumber,lastNumber){
//     const sum=firstNumber * lastNumber;
//     const Product= firstNumber / lastNumber;
//     return [sum,Product];
// }
// const moreOp = addnumber(200,5);
// console.log(moreOp);

// function greeting(name){
//     console.log('good morning, '+ name);
// }
// greeting("Olamide");

// function addnumber(firstNumber,lastNumber){
//     const sum=firstNumber + lastNumber
//     console.log(sum)
// }
// addnumber(20,5);

// for(let number = 0; number <=20; number = number +1){
//     if(number%2 !==0){
//         console.log(number + ' is an odd number')
//     }else{
//         console.log(number + ' is an even number')
//     }
// }

// let star = 1                            //starting point
// while(star<=100){                       // when to stop
//     if(star===1){
//         console.log(star + ' star')
//     }else{
//         console.log(star + ' stars')
//     }
    
//     star = star +1                    // step to go next iteration
// }
   
// const day = 'Friday'

// switch(day){
//     case'Friday':
//        console.log('TGIF')
//        break
//     case 'Saturday':
//         console.log('yah itz weekend')
//         break
//     case 'Wednessday':
//         console.log('midweek')
//         break
//      case 'Monday':
//         console.log('Serious day')
//         break
//     default:
//         console.log('celebrate allday')

// }
// if(day==='Wednessday'){
//     console.log('itz midweek')
// }else if (day==='Friday'){
//     console.log('yah itz weekend')
// }else if (day==='Sunday'){
//     console.log('Go to church')
// }else {
//     console.log('go to work')
// }



// const userName = 'Victory'
// const age = 45

// const age = 69
// if(age>=18 && age <= 65) {
//     console.log('you are eligble to vote')
// }
// else if(age>=65) {
//     console.log('you are too old to vote')
// }
// else {
//     console.log('you are not eligible to run')
// }
// const age = 100
// if(age>=18) {
//     console.log('you are eligble to vote')
// }else{
//     console.log('you are too young to vote')
// }

// const compare = 4>-5
// console.log(compare)


// const isBritish = true
// const isNight = false
// console.log(typeof(4+'4'))

// const addition = 40%2
// console.log(addition)
// // const myFavProgLang = 'JavaScript'
// // var myFavPro = 'testing'
// // myFavPro = 'python'

// let currentScore = 20
// // currentScore = 26

// // console.log(currentScore)
// // console.log(myFavPro)

// const myAge1 = 23

// multiplyAge = myAge1 +3
// console.log(multiplyAge)

// const myLanguage = 'Javascript'
// const sentence = 'my language is ' + myLanguage +' I am '+multiplyAge+ ' year old.'
// console.log(sentence)
// // console.log(typeof(myLanguage))
// // console.log(typeof(myAge1)) how to check value in a variable