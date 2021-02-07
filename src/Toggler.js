import React, {useState} from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
    const [isHappy,toggleIsHappy] = useToggle(true);
    const [isSingle, toggleSingle] = useToggle(false);
    
    return( 
        <div>
<h1 onClick={toggleIsHappy}>{isHappy ? "I am happy" : "I am sad"}</h1>

            
<h1 onClick={toggleSingle}>{isSingle ? "I am single" : "I am Married"}</h1>
        </div>
    )
}

export default Toggler;
