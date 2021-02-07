import React, {useState} from 'react';

function CounterHook(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <h1>This is count : {count} </h1>
            <button onClick={()=> setCount(count + 1)}>Add 1</button>
        </div>
    )
}

export default CounterHook;