import React from "react";

function GifCardRandom(props) {
    const { randomGif} = props;
    console.log(randomGif);
    
    return (
        <>
            <div key = {randomGif.id}>
                <img src={randomGif?.images?.original?.url} alt={randomGif?.images?.original?.url}></img>   
            </div>
        </>
    )
}

export default GifCardRandom