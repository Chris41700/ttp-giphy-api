import React from "react";

function GifCardRandom(props) {
    const { randomGif} = props;
    console.log(randomGif);
    
    return (
        <>
            <div key = {randomGif.id}>
                <img src={randomGif.url} alt={randomGif.url}></img>   
            </div>
        </>
    )
}

export default GifCardRandom