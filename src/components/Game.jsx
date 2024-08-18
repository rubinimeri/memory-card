import { useState } from "react"
import DifficultySelection from "./DifficultySelection";

function Game() {
    const [difficulty, setDifficulty] = useState(null);

    return (
        <main className="game">
            {difficulty === null && 
                <DifficultySelection 
                setDifficulty={setDifficulty} />}
        </main>
    )
}

export default Game