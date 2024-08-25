import { useEffect, useState } from "react"
import DifficultySelection from "./DifficultySelection";
import Scoreboard from "./Scoreboard";
import CardList from "./CardList";
import { fetchImages } from "../utils";

function Game() {
    const [gameStatus, setGameStatus] = useState('playing');
    const [images, setImages] = useState(null);
    const [selectedImageIds, setSelectedImageIds] = useState([]);
    const [difficulty, setDifficulty] = useState(null);
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchImages(difficulty);
            setImages(data);
        }
        fetchData();
    }, [difficulty]);

    useEffect(() => {
        if (images && score === images.length) {
            endGame('win');
        }
    }, [images, score]);

    function shuffleImages() {
        setImages(images => 
            images
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        )
    }

    function updateScore() {
        const newScore = score + 1;

        setScore(newScore)
        if(newScore > highscore)
            setHighscore(newScore);
    }

    function endGame(status) {
        setGameStatus(status)
        setDifficulty(null)
        setImages(null);
        setSelectedImageIds([]);
        setScore(0);
    }

    function continueGame(id) {
        setSelectedImageIds([...selectedImageIds, id])
        shuffleImages();
        updateScore()
    }

    function handleClick(e) {
        const { id } = e.target.closest('div');

        // Check if ID is in selectedImageIds
        if(selectedImageIds.includes(id))
            endGame('lose')

        // Add ID to selectedImageIds && shuffle images
        else 
            continueGame(id)
    }
    return (
        <main className="game">
            {difficulty === null ? 
                <DifficultySelection 
                setDifficulty={setDifficulty}
                win={gameStatus} /> : 
                (<>
                    <Scoreboard
                    score={score}
                    highscore={highscore} />
                    <CardList
                    images={images}
                    handleClick={handleClick} />
                </>) }
        </main>
    )
}

export default Game