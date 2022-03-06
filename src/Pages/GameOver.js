import { Button, makeStyles, Typography } from '@material-ui/core'

import React from 'react'
import { Link } from 'react-router-dom'


const useStyles= makeStyles({
    root: {
        textTransform: 'none',
    }
})

function GameOver() {
  return (
    <div>

        <h1>Game Over</h1>
         <h2>You have lost</h2>
         <Link to="/">
         <Button variant="contained" color="primary">
               <Typography variant="text" gutterBottom >

                    Play Again  
                </Typography>
         </Button>
            </Link>



    </div>
  )
}

export default GameOver