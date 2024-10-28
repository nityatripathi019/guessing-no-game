// guessing game in javascript
// const max = prompt("enter the maximum number");

// const random = Math.floor(Math.random()*max) + 1;
// console.log(random);

// let guess = prompt("guess the random generated no");
// // console.log(guess);

// while(true){
//     if(guess=="quit"){
//         console.log("you have quitted the game");
//         break;
//     }

//     if(guess == random){
//         console.log("Congratulation! you have guesses right no");
//         break;
//     }
//     else{
//         guess = prompt("please guess again");
//         console.log(guess);
//     }
        
// }

// guessing game with advance version

const max = prompt("enter maximum number");
console.log(max);

const random = Math.floor(Math.random()*max) + 1;
console.log(random);

let guess = prompt("guess the no.");
// console.log(guess);

while(true){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    
     if (guess>random){
        alert("your no is greater than the random no");
        guess = prompt("enter lesser no");
        console.log(`${guess}is greater no`);
    }
     else if(guess<random ){
        alert("your no is lesser than the random no"); 
        guess = prompt("enter greater no");
        console.log(`${guess}is lesser no`);
    }
    else {
      
        console.log("Congratulation! you guessed it right");
        console.log(guess);
        break;
       
        
    }
    
}