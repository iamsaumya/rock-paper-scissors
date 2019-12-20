          function playRound(playerSelection,computerSelection){
                playerSelection = playerSelection.toLowerCase();
                if(playerSelection==="rock" && computerSelection==="paper"){
                    return 0;
                }
                else if(playerSelection==="rock" && computerSelection==="scissor"){
                    return 1;
                }
                else if(playerSelection==="paper" && computerSelection==="rock"){
                    return 1;
                }
                else if(playerSelection==="paper" && computerSelection==="scissor"){
                    return 0;
                }
                else if(playerSelection==="scissor" && computerSelection==="paper"){
                    return 1;
                }
                else if(playerSelection==="scissor" && computerSelection==="rock"){
                    return 0;
                }
            }
            
            function game(){
                
                let user = 0 ;
                let computer = 0;

                for(let i=0;i<5;i++){
                    const playerSelection = prompt("Enter your choice","");
                    const computerSelection = computerPlay()
                    let result = playRound(playerSelection, computerSelection)
                    if(result==1)
                        user++;
                    else if(result==0)
                        computer++;
                    
                    console.log(`User ${user} |||| Computer ${computer}.`);
                }

                if(user>computer){
                    console.log("You Win!");
                }
                else if(user<computer){
                    console.log("You Lose!");
                }
                else
                    console.log("It is a Draw!");
            }
            function computerPlay(){
                let randomnumber = Math.floor(Math.random()*3);
                var choices = ['rock','paper','scissor'];
                return choices[randomnumber];
            }