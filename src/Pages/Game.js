import { Button, makeStyles, Typography } from '@material-ui/core';

import React, { useEffect, useState } from 'react'
import GameOver from './GameOver';
import Won from './Won';





const useStyles= makeStyles({
    root: {
        textTransform: 'none',
    }
})
function Game() {
    const classes = useStyles();
    const hiddenWord = "pragma";
    const [lives, setLives] = useState(6)
    const [correctGuess, setCorrectGuess] = useState([]); 
    
    // create the array of alphabets
    const ALPHABET =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
    const maskedWord = hiddenWord.split('').map(letter => 
        correctGuess.includes(letter) ? letter : "_").join(" ");
      


          
  return (





    <div>

        <h1>Welcome to the game</h1>
        <h2>Guess the word</h2>
          <h1>LIVES : {lives}</h1>
       

       <p> {maskedWord }</p>
     
     
       {

          
           ALPHABET.map(alphabet => (
             
                <Button className={classes.root} variant="contained" color="primary" onClick={() => {
                    
                 
                    if(hiddenWord.includes(alphabet)) {
                        
                        setCorrectGuess( [...correctGuess,alphabet]);
                            
                    }
                    else {
                        setLives(lives - 1);
                    }


                }}
                disabled={correctGuess.includes(alphabet)}
                >
                    <Typography variant="text" gutterBottom >
                        {alphabet}
                    </Typography>
                </Button>
              ))
       }

       {
                hiddenWord.length === correctGuess.length? <Won />: lives === 0 ? <GameOver /> : null
           

       }


            

          
 



    </div>
  )
}

export default Game
