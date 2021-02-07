import React from 'react';
import useInputhook from './hooks/useInputhook';

function SimpleFormInputHook() {
    const [email,updateEmail,resetEmail] = useInputhook('');
    
    return (
        <div>
            <h1>The value is {email}</h1>
            <input type="text" onChange={updateEmail} />
            <button onClick={resetEmail}>Submit</button>
        </div>
        
    )
}

export default SimpleFormInputHook;
