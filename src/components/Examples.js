import React, { useState } from 'react';
import { examples } from '../data/examples';
import { FaRandom } from 'react-icons/fa';

export default function Examples() {
    const [index, setIndex] = useState(0);
    const getRandom = () => {
        // Gets a random example each time. //
        const randomNumber = Math.floor(Math.random() * examples.length);
        // If the random number is the same as previous, just call the function again until it's different //
        if(randomNumber !== index) 
        {
            setIndex(randomNumber);
        }
        else
        {
            getRandom()
        }
    }

    return (
        <div>
            <button onClick={() => getRandom()}><FaRandom /></button>
            <p className="example">{examples[index].text}</p>
        </div>
    )
}