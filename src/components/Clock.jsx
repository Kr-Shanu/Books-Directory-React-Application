import React, { useState } from "react";

const currentTime = new Date().toLocaleString();

function Clock(){

    setInterval(updateTime, 1000);

    const [time, setTime] = useState(currentTime);

    function updateTime(){
        var newTime = new Date().toLocaleString();
        setTime(newTime);
    }

    return(
        <p> {time}  </p>
    );
}

export default Clock;