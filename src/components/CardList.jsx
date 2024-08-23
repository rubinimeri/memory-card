import Card from "./Card"

function CardList({ images, handleClick }) {
    return (
        <div className="card-list">
            {images.map(image => 
                <Card 
                key={image.id} 
                image={image}
                handleClick={handleClick} />
            )}
        </div>
    )
}

export default CardList