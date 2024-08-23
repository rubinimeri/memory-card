import { createClient } from "pexels";

const API_KEY = 'DfYuKwhQAXH3ja73F6JioFLgLiHNKe7WXgON6jvvVrXK4yBRgbLlSF50';
const query = 'Nature';
const pexels = createClient(API_KEY);

export const fetchImages = async (numberOfImages = 5) => {
    try {
        return await pexels.photos
            .search({ query, page: 1, per_page: numberOfImages, orientation: 'portrait' })
            .then(images => images.photos);
    } catch(error) {
        console.error(error.message)
    }
}