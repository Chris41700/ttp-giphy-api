import React, { useEffect, useState } from 'react'
import GifCard from './GifCard'

function SearchField() {
    const [gif, setGif] = useState([])
    const [filteredData, setFilteredData] = useState("")
    const myAPI = "QxVcSjV1U82B2wXPo3GDoGiLxSDq9WpB"

    const getGif = async() => {
        try {
            const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${filteredData}&api_key=${myAPI}`)
            console.log(response);

            const jsonData = await response.json();
            console.log(jsonData);

            setGif(jsonData.data);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getGif();
    }, [filteredData])

    return (
        <>
            <h1 className = "text-center mt-5">
                GIPHY SEARCH APP
            </h1>

            <form>
                <input
                    type = "text"
                    className = "form-control"
                    placeholder = "Enter a GIF search"
                    value = {filteredData}
                    onChange = {event => setFilteredData(event.target.value)}>
                </input>
            </form>

            <GifCard gif = { gif } />
        </>
    )
}

export default SearchField