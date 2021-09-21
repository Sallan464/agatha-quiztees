import React from 'react';
import "./style.css";

const Scorebanner = () => {

    let position;
    let username;
    let score;
    
    return (

        <div class='banner'>
            <div class='position'>
                <p>{position}</p> 
            </div>
            <div class='name'>
                <p>{username}</p>
            </div>
            <div class='score'>
                <p>{score}</p>
            </div>
        </div>

    );
}

export default Scorebanner;
