import React from "react";

function GifCard(props) {
    const {gif} = props;
    console.log(gif);
    
    return (
        <>
            {gif.map((element) => {
                return (
                    <div key = {element.id}>
                        <img src={element.images.original.url} alt={element.images.original.url}></img>   
                    </div>
                )
            })}
        </>
    )
}

export default GifCard