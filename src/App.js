//TODO: STEP 1 - Import the useState hook.

// Personal note : the useState hook is imported from the react library

import React, { useState } from "react"; 
import "./App.css";
import BottomRow from "./BottomRow";

function App() {

  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  


  const [lionsScore, newLionsScore] = useState(0);
  const [tigersScore, newTigersScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

              {/* Personal note: Here, we're rendering a component. Conceptually, components are like JS functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. .  */}

            <div className="home__score"> { lionsScore } </div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score"> { tigersScore } </div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => newLionsScore(lionsScore + 6)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => newLionsScore(lionsScore + 3)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          {/*  PN : onClick, which is an event listener, take in a callback function; newTigersScore.  */}
          <button onClick = {() => newTigersScore(tigersScore + 6)}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => newTigersScore(tigersScore + 3)}className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;


