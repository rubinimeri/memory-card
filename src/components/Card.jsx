function Card({ image, handleClick }) {
    return (
        <div 
        id={image.id}
        onClick={handleClick}
        className="card">
            <img 
            src={image.src.medium} />
            <p className="photographer">{image.photographer}</p>
            <p className="description">{image.alt}</p>
        </div>
    )
}

export default Card