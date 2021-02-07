import React, {useState} from 'react';

function SimpleFormHook() {
    const [email,setEmail] = useState("");
    const handleChange = (event) => {
        
        setEmail(event.target.value);
    }
    return (
        <div>
            <h1>The value is {email}</h1>
            <input type="text" value={email} onChange={handleChange}/>
        </div>
    )
}

export default SimpleFormHook;
