import React from 'react'

function Lives({lives}) {
  return (
    <div>
      <div className="hangman-container">
    <div className="pole"> </div>
<div className={`hangman hangman-${6-lives}`}>
<div className="hangman__element">
<div className="hangman__element"></div>
<div className="hangman__element"></div>
<div className="hangman__element"></div>
<div className="hangman__element"></div>
<div className="hangman__element"></div>
<div className="hangman__element"></div>
</div>
</div>
   </div>
        <h1>Lives : {lives}</h1>
    </div>
  )
}

export default Lives
