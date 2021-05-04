const game = ()=>{
    let pscore=0;
    let cscore=0;

    const startgame=()=>{
        const playbutton=document.querySelector('.intro button')
        const introscreen=document.querySelector('.intro');
        const match=document.querySelector('.match');

        playbutton.addEventListener('click',()=>{
            introscreen.classList.add('fadeout');
            match.classList.add("fadein")
        });
    };
    const playmatch=()=>{
        const options=document.querySelectorAll('.options button');
        const playerhand=document.querySelector('.player-hand');
        const computerhand=document.querySelector('.computer-hand');
        const hands=document.querySelectorAll('.hands img');



        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation='';
            });
        });


        const computeroptions=['rock','paper','scissors'];

        options.forEach(option=>{
            option.addEventListener('click', function(){
                const computeroption=Math.floor(Math.random() * 3);
                console.log(this);
                const computerchoice=computeroptions[computeroption];
                setTimeout(()=>{
                    compare(this.textContent,computerchoice);
                
                playerhand.src=`${this.textContent}.png`;
                computerhand.src=`${computerchoice}.png`;

                },2000);

                playerhand.style.animation = "shakeplayer 2s ease";
                computerhand.style.animation = "shakecomputer 2s ease";
                
            
            });
        });
        
        

    };


    const updatescore=()=>{
        const playerscore=document.querySelector('.player-score p');
        const computerscore=document.querySelector('.computer-score p');
        
        playerscore.textContent=pscore;
        computerscore.textContent=cscore;

    }

    const compare=(playerchoice,computerchoice) =>{
        const winner=document.querySelector('.winner');
        if(playerchoice===computerchoice){
            winner.textContent='It is a TIE';
            return;

        }
        if (playerchoice==='rock'){
            if (computerchoice==='scissors'){
            winner.textContent="You win";
            pscore++;
            updatescore();
            return;
        }else{
            winner.textContent="Oh! Computer Wins"
            cscore++;
            updatescore();
            return;
            }
        }
        if (playerchoice==='paper'){
            if (computerchoice==='scissors'){
            winner.textContent="Oh! Computer Wins";
            cscore++;
            updatescore();
            return;
        }else{
            winner.textContent="You Win"
            pscore++;
            updatescore();
            return;
            }
        }

        if (playerchoice==='scissors'){
            if (computerchoice==='rock'){
            winner.textContent="Oh! Computer Wins";
            cscore++;
            updatescore();
            return;
        }else{
            winner.textContent="You Win";
            pscore++;
            updatescore();
            return;
            }
        }

    }
    

    startgame();
    playmatch();
    
    

};

game();