 let randomNum = parseInt(Math.random () *50 +1);

 const userInput = document.querySelector('#guessInput');
 const submit = document.querySelector('#guessBtn');
 const prevGuess = document.querySelector ('#previousGuesses');
 const remaining = document.querySelector('#remainingChances');
 const startOver = document.querySelector('.result');
 const lowOrHi = document.querySelector ('#lowOrHi');
 const error = document.querySelector('#error');

const p = document.createElement ('p'); 


let previousGuess = []; //This empty arry will hold the guesses that user make..

let numGuess = 1; //This is the number of guesses that user get..starting from 1

let playGame =true; //This will allow user to play game of the user is elegible..

//Here I will write the user to check if the user can play or not...


//Multiple event Listener
 submit.addEventListener('click' ,(e) =>{
    e.preventDefault();
    submitGame();
    // console.log('clicked')
 });


 userInput.addEventListener('keydown' ,(e) =>{
    if(e.key === 'Enter'){

        submitGame();

    }
 })


function submitGame() { //to fire click and enter button ....

if(playGame){
    // submit.addEventListener('click' ,(e) =>{
        // e.preventDefault(); //Preventing default submission of the form in server

        const guess = parseInt(userInput.value);//This is to take the given value by user
        // console.log(guess);
        validateGuess(guess); //and if the user is elegible to play then  it will pass to validGuess function


    // })

}
//Now lets create some function to perform some operation...


  function validateGuess (guess) { 
//So this function will check if the number is NAN or <0 and so on..
if(isNaN(guess)){
            error.innerHTML = 'Please Enter the Valid Number';
}
else if(guess <1){
        error.innerHTML ='Please Enter Number larger Than 1';
}
else if(guess >50){
    error.innerHTML ='Please Enter Number Below than 50'//Till here It will check for valid number..
}
else{  //From here if the number is valid then
    previousGuess.push(guess); // start Pushing entered number in the above  previous guess empty array
    error.innerHTML =''; //clear the error message if enter correct value

    if(numGuess >= 10){ //And if its the last number that means 10 then
        displayGuess(guess) //display guess
        displayMessage (`Game Over. The Number was ${randomNum}`); //Give the answer to user
        endGame(); //end the game
    }
    else{ //Or if its not last number then
        displayGuess(guess); //Display the user guess
        checkGuess(guess); //And check the guess weather its == to random number or not
    }
}




  }

function checkGuess (guess) {

    //This will tell the user either number is too high or too low and other messages also

    if(guess ===randomNum){
        displayMessage(`Hurray ! You Gussed it Right`);
        endGame();
    }
    else if(guess > randomNum){
        displayMessage(`Opps You gussed it Tooo High`);

    }
    else if(guess < randomNum){
        displayMessage (`Opps! You gussed it Tooo Low`);
    }

}

function displayGuess (guess){
    //This will clean the input field , update guess array , and update the number of guesses
    userInput.value ='';//Here the input value will get clean each time after hiting the submit button
    prevGuess.innerHTML += `${guess} ,`;   //Here the guess slot will get upadted every time
    numGuess ++;
    remaining.innerHTML = `${11- numGuess }`; //This will decrement the number of remaining chance from 10 to 1
 

}


function displayMessage(message) {
    //This will interact with Dom and display and manupulation with the message to the user 
    lowOrHi.innerHTML =`<h4> ${message} </h4>`

}



function endGame () {
    //This is used to end the game if user guess it correct
    userInput.value =''
    userInput.setAttribute('disabled' , '') //key and value..
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> New Game </h2>`;
    startOver.appendChild(p)
    playGame =false;
    SatrtNewGame();
    

}


function SatrtNewGame() {
    //This will start new game if the user run out of chances
     const newGame = document.querySelector('#newGame');
     newGame.addEventListener('click' , (e)=>{

     randomNum = parseInt(Math.random () *50 +1); //Resetting all value for new game again....
     previousGuess=[];
     numGuess =1;
     remaining.innerHTML = `${11 - numGuess}`;
     prevGuess.innerHTML ='';
     userInput.removeAttribute('disabled' );
     startOver.removeChild(p);
     playGame =true;

     })

}
}

//And thats it for Project...
//Easy and simple..
//Happy Coding