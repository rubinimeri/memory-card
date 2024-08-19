import { useState } from "react"
import DifficultySelection from "./DifficultySelection";
import Scoreboard from "./Scoreboard";
import { fetchImages } from "../utils";

function Game() {
    const [difficulty, setDifficulty] = useState(null);
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);

    return (
        <main className="game">
            {difficulty === null ? 
                <DifficultySelection 
                setDifficulty={setDifficulty} /> : 
                (<>
                    <Scoreboard
                    score={score}
                    highscore={highscore} />
                </>) }
        </main>
    )
}

export default Game