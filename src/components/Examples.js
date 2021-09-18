import React from 'react';
import { examples } from '../data/examples';

export default function Examples() {

    return (
        <div>
            {examples.map((eg) => (
                <p>{eg.text}</p>
            ))
            }
        </div>
    )
}