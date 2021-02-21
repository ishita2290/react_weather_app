import React from 'react'

const getTime =()=>{
const today=new Date();
const time = today.getHours() + ":" + today.getMinutes() ;

return time
}

function Time() {
return(
    <div>
        {getTime()}
    </div>
)   

}

export default Time
