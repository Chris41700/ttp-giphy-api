import React, { useEffect, useState } from 'react'
import GifCard from './GifCard'
import GifCardRandom from './GifCardRandom'

function SearchField() {
    const [gif, setGif] = useState([])
    const [randomGif, setRandomGif] = useState([]);
    const [filteredData, setFilteredData] = useState("")
    const [isRandomClick, setIsRandomClick] = useState(false);
    const myAPI = "QxVcSjV1U82B2wXPo3GDoGiLxSDq9WpB"

    const getGif = async e => {
        e.preventDefault();

        try {
            const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${filteredData}&api_key=${myAPI}`)
            console.log(response);

            const jsonData = await response.json();
            console.log(jsonData);

            setGif(jsonData.data);
            setIsRandomClick(false);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTrendingGif = async() => {
        try {
            const response = await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${myAPI}`)
            console.log(response);

            const jsonData = await response.json();
            console.log(jsonData);

            setGif(jsonData.data);
            setIsRandomClick(false);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getRandomGif = async() => {
        try {
            const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${myAPI}`)
            console.log(response);

            const jsonData = await response.json();
            console.log(jsonData);

            setRandomGif(jsonData.data);
            setIsRandomClick(true);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getGif();
    }, [filteredData])

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
            <h1 className = "text-center mt-5">
                GIPHY SEARCH APP
            </h1>

            <form onSubmit={handleSubmit}>
                <input
                    type = "text"
                    className = "form-control"
                    placeholder = "Enter a GIF search"
                    value = {filteredData}
                    onChange = {event => setFilteredData(event.target.value)}>
                </input>

                <button type="submit" onClick={(getGif)}>Regular</button>
                <button type="submit" onClick={getTrendingGif}>Trending</button>
                <button type="submit" onClick={getRandomGif}>Random</button>
            </form>

            {!isRandomClick && <GifCard gif = { gif } />}
            {isRandomClick && <GifCardRandom randomGif = { randomGif } />}
        </>
    )
}

export default SearchField