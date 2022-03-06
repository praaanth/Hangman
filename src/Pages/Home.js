import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
  <Link to="/game">
    <Button variant="primary" color="primary">
        <Typography variant="h5" >
            start 
        </Typography>
    </Button>
    </Link>
    </div>
    
  )
}

export default Home
