const EASY_DIFFICULTY = 5;
const MEDIUM_DIFFICULTY = 10;
const HARD_DIFFICULTY = 15;

function DifficultySelection({ setDifficulty, win }) {
    function handleSelect(e) {
        setDifficulty(e.target.value);
    }

    return (
        <div className="select-difficulty">
            <div>
                <h2 className="result">
                    {win === true ?
                    'You won!' :
                    win === false ?
                    'You lost!' :
                    ''}
                </h2>
                <h2>Select Difficulty</h2>
            </div>
            <div className="buttons">
                <button
                onClick={handleSelect}
                value={EASY_DIFFICULTY}
                className="easy select-btn">Easy</button>
                <button 
                onClick={handleSelect}
                value={MEDIUM_DIFFICULTY}
                className="medium select-btn">Medium</button>
                <button 
                onClick={handleSelect}
                value={HARD_DIFFICULTY}
                className="hard select-btn">Hard</button>
            </div>
        </div>
    )
}

export default DifficultySelection