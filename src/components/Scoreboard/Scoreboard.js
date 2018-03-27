import React from "react"
import "./Scoreboard.css"

const Scoreboard = props => (
<div className="scoreboard">
    <h2> Score: {props.score}</h2>
    <h2> Highscore: {props.highscore} </h2>
</div>
); 
        

export default Scoreboard