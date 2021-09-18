import React from 'react'

export default function Results({numLetters, numSentences, numWords, grade}) {
    return (
        <div className="results-wrapper">
            <p>Letters: {numLetters}</p>
            <p>Words: {numWords}</p>
            <p>Sentences: {numSentences}</p>
            <h4>Grade: {grade}</h4>
        </div>
    )
}
