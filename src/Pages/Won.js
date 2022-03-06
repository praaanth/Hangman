import { Button,  Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Won() {
  return (
    <div>
        <h1>You Won</h1>
        <h2>You have guessed the word correctly</h2>
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

export default Won
