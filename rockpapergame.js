const getUserChoice =userInput =>{
  userInput=userInput.toLowerCase();
  if(userInput=='rock' || userInput=='paper' || userInput=='scissors'){
    return userInput;
  }
  else{
    console.log("The is error")
  }
}
//console.log(getUserChoice('x'));
const getComputerChoice=()=>{
  let x=Math.floor(Math.random()*3)
  switch (x){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
       }
}
console.log(getComputerChoice());
const determineWinner=(userChoice,computerChoice)=>{
  if(userChoice===computerChoice){
    return "tie";
  }
    if(userChoice=='rock'){
      if(computerChoice=='paper'){
        return 'computer won';
      }
      else{
        return 'user won'
      }
    }
    else if(userChoice=='paper'){
      if(computerChoice=='scissors'){
        return 'computer wins'
      }
      else if(computerChoice=='rock'){
        return 'user wins';
      }
    }
  }
  
//console.log(determineWinner(userChoice,computerChoice));
const playGame=()=>{
  const userChoice=getUserChoice('rock');
  const computerChoice=getComputerChoice();
 // console.log(userChoice,computerChoice);
  console.log("The User choice is " + userChoice);
  console.log("The computer Choice is "+ computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
  }
playGame();