

import { Container, makeStyles, Typography } from '@material-ui/core';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import {Home,Game} from './Pages';
    import './App.css';

    const useStyles=makeStyles(()=>({
      App:{
        // backgroundColor: 'rgb(50,40,70)',
        color:"white",
        fontFamily: '"Roboto", sans-serif',
           minHeight: '100vh',
          
       
      },
      header: {
        display: 'flex',
        justifyContent: 'center',
         backgroundColor:"pink",
        alignItems: 'center',
        // give the good animated color when hovered over it to the text field
        '&:hover': {
            backgroundColor: 'rgb(118,118,118)',
            color: 'pink',
            boxShadow: 'inset 0px 0px 0px 0px #f9e5e6',
            courser: 'pointer',
            transition: 'ease-out 0.5s',
    
      },

      },
  }));


function App() {
      const classes=useStyles();
  return (

    <Router>
          <div className={classes.header}>
        <Typography variant="h3"> 
           Hangman Game 
         
        </Typography>
        </div>
    <div className={classes.App}>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
         </Routes>
    </div>
    
    </Router>
    
  );
}

export default App;
