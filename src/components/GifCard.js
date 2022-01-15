import React from "react";

function GifCard(props) {
    const {gif} = props;
    console.log(gif);
    
    return (
        <>
            {gif.map((element) => {
                return (
                    <div key = {element.id}>
                        <img src={element.url}></img>   
                    </div>
                )
            })}
        </>
    )
}

export default GifCard