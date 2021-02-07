import React, {useState} from 'react';

function Toggler() {
    const [isHappy,setIsHappy] = useState(true);
    const [isSingle,setIsSingle] = useState(false);
    const toggleSingle = () => {
        setIsSingle(!isSingle);
    }
    return (
        <div>
<h1 onClick={()=> setIsHappy(!isHappy)}>{isHappy ? "I am happy" : "I am sad"}</h1>

            
<h1 onClick={toggleSingle}>{isSingle ? "I am single" : "I am Married"}</h1>
        </div>
    )
}

export default Toggler;
