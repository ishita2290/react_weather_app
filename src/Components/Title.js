import React from 'react'
// import Dates from  "./Dates"
import Logo from "./arrow.png";
// import styles from "./Components/Title/Title.module.css"

function Title() {
    return (
        <div>
            
            <h1>Weather Forecast</h1>
            
{/*            
            <Dates /> */}
            <img src={Logo}></img>
        </div >
    )
}

export default Title
