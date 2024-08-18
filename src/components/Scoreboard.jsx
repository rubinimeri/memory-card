import { useState } from "react"

function Scoreboard({ score, highscore }) {
    return (
        <div className="scoreboard">
            <p>Score: {score}</p>
            <p>High Score: {highscore}</p>
        </div>
    )
}

export default Scoreboard