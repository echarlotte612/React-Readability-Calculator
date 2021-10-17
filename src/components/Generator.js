import React, { useState, useEffect } from 'react';
import Examples from './Examples';
import Results from './Results'

export default function Generator() {

    const [text, setText] = useState("");
    const [gotInfo, setGotInfo] = useState(false);
    const [numLetters, setNumLetters] = useState(0);
    const [numWords, setNumWords] = useState(0);
    const [numSentences, setNumSentences] = useState(0);
    const [grade, setGrade] = useState("");
    const [showExamples, setShowExamples] = useState(false);

    useEffect(() => {
        let L = 100 * (numLetters / numWords);
        let S = 100 * (numSentences / numWords);
        let G = Math.round(0.0588 * L - 0.296 * S - 15.8);
        // If statement depending on grade //
        if (G < 1) {
            setGrade("Below grade 1");
        }
        else if (G >= 16) {
            setGrade("16+");
        }
        else {
            setGrade(G);
        }
    }, [numLetters, numWords, numSentences]);

    // COUNT LETTERS, WORDS AND SENTENCES FROM TEXT //
    const countUp = (text) => {
        let l = 0;
        let w = 1;
        let s = 0;
        // clear states to start again //
        setNumLetters(0);
        setNumWords(0);
        setNumSentences(0);
        setGrade(0);
        // add letters //
        for (let i = 0, length = text.length; i < length; i++) {
            // only adds a counter if the character is a letter. //
            if (text[i].match(/[a-z]/i)) {
                l++;
                setNumLetters(l);
            }
        }
        // add words //
        for (let i = 0, length = text.length; i < length; i++) {
            // only adds a counter if the character is a letter. //
            if (text[i] === ' ') {
                w++;
                setNumWords(w);
            }
        }
        // add sentences //
        for (let i = 0, length = text.length; i < length; i++) {
            // only adds a counter if the character is a letter. //
            if (text[i] === '.' || text[i] === '!' || text[i] === '?') {
                s++;
                setNumSentences(s);
            }
        }
    }

    const generateReport = () => {
        if (gotInfo) {
            setGotInfo(!gotInfo);
            setNumLetters(0);
            setNumWords(0);
            setNumSentences(0);
            setGrade(0);
        }
        else {
            countUp(text);
            setGotInfo(!gotInfo);
        }
    }
    const toggleExamples = (e) => {
        if (showExamples) {
            setShowExamples(false);
            e.target.innerHTML = "Examples";
        }
        else {
            setShowExamples(true);
            e.target.innerHTML = "Hide Examples";
        }
    }

    return (
        <div>
            {!gotInfo &&
                <div className="generator-wrapper">
                    <textarea
                        placeholder="Enter text here..."
                        onChange={(e) => setText(e.target.value)}
                    />
                    <div className="generator-buttons">
                        <button onClick={(e) => toggleExamples(e)}>Examples</button>
                        <button onClick={() => generateReport()}>Generate</button>
                    </div>
                    {showExamples &&
                        <Examples />
                    }
                </div>
            }
            {gotInfo &&
                <div>
                    <Results
                        numLetters={numLetters}
                        numSentences={numSentences}
                        numWords={numWords}
                        grade={grade}
                    />
                    <button onClick={() => generateReport()}>Generate Again</button>
                </div>
            }
        </div>
    )
}
