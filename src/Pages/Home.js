import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles= makeStyles({
  root: {
    // arrange the button at the cetner of the screen

    position: 'absolute',
    left: '50%',
    top: '50%',
      
       
    transform: 'translate(-50%, -50%)',

  },
  btn: {
        // create a nice color and hover effects to the button
        backgroundColor: 'rgb(118,118,118)',
        color: 'white',
        width: '200px',
      height: '100px',
        borderRadius: '4px',
        boxShadow: 'inset 0px 0px 0px 0px #f9e5e6',
        transition: 'ease-out 0.5s',
        fontSize: '2rem',
          outline: 'none',

        '&:hover': {
            backgroundColor: '#45a049',
            boxShadow: 'inset 200px 0px 0px 10px #FF69B4',
            courser: 'pointer',
            color: 'black'
        },
  },
  App: {
    //  give good background color
    backgroundColor: 'rgb(50,50,50)'
  },
  
  

})


function Home() {
    const classes=useStyles();
  return (
    <>
    
      
      <div className={classes.App}>
    <div className={classes.root}>
  <Link to="/game" style={{textDecoration:"none"}}>
    <Button variant="primary" className={classes.btn}>
        <Typography variant="h5" >
            start 
        </Typography>
    </Button>
    </Link>
    </div>
    </div>
    </>
  )
}

export default Home
