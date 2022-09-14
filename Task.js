const books =  [
    {
        title:'The Audactiy of Hope',
        description:'Thought of Reclaiming the American Dream',
        numberOfPages:362,
        authour:'Barack Obama',
        reading:true
    },
    {
        title:'Fundamental JavaScript',
        description:'Testify is Drilling me at the moment',
        numberOfPages:1000,
        authour:'Ibironke Yekini',
        reading:true
    },
    {
        title:'Fundamental of Python',
        description:'I can\'t get enough of Testify',
        numberOfPages:2000,
        authour:'Ibironke Yekini',
        reading:false
    }
]
for (let t=0; t<=books.length; t++){
    if(books[t].reading===true){
        console.log(books[t])
    }
}








// const book ={
//     title:'The Audactiy of Hope',
//     description:'Thought of Reclaiming the American Dream',
//     numberOfPages:362,
//     authour:'Barack Obama',
//     reading:'fal',
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

// const book ={
//     title:'The Audactiy of Hope',
//     description:'Thought of Reclaiming the American Dream',
//     numberOfPages:362,
//     authour:'Barack Obama',
//     reading:'false'
// }

// console.log(book.authour)




// function calcAreaOfRectangle(lenght,width){
//     const product=lenght*width
//     console.log(product)
// }
// calcAreaOfRectangle(56,32)



// const side1 = 12
// const side2 = 10
// const side3 = 11
// if(side1===side2 && side2===side3){
//     console.log('Equilateral Triangle')
// }else if(side1===side2 || side2===side3 ||side1===side3){
//     console.log('Isosceles Triangle')
// }else{
//     console.log('Scelene Triagle')   
    
// }

// const myFriends = ['Steve','Omoni','Lanre','Roli','Tejiri']
// console.log(myFriends)  //task 8

// const myFriends = ['Steve','Omoni','Lanre','Roli','Tejiri']
// const bestFriend = myFriends[4]

// console.log(bestFriend)   //task 9




// function area(lenght, width){
//     const areaOfRectangle =lenght * width;
//     return areaOfRectangle;
// }rectangleArea = area(25,10);
//     console.log(rectangleArea);


//     for(let num = 0; num<=20; num = num +1){
//     if(num%2 !==0){
//         console.log(num+ ' is an odd number')
//     }
// }

// const day = 'Friday'
// const positionOfDay = 6
// const output = 'Today is '+ day + ' and its the '+ positionOfDay + 'th day of the week'
// console.log(output)