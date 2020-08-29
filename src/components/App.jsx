import React, { useState } from 'react';

function App() {

    setInterval(updateTime, 1000);
    
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);

    function updateTime() {
        const now = new Date().toLocaleTimeString();
        setTime(now);
    }

    return (
        <div className="container">
            <h1>{time}</h1>
        </div>
    );

     

}

export default App;