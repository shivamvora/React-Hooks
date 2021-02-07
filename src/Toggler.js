import React, {useState} from 'react';

function Toggler() {
    const [isHappy,setIsHappy] = useState(true);
    return (
        <div>
            <h1 onClick={()=> setIsHappy(!isHappy)}>{isHappy ? "I am happy" : "I am sad"}</h1>
        </div>
    )
}

export default Toggler;
