
import React from 'react';



const getDate =(newDate) =>{
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day =daysOfWeek[newDate.getDay()];
    let date = newDate.getDate();
    let month =months[newDate.getMonth()];
    let year= newDate.getFullYear();
    // console.log(year);

    return `${day} ${date} ${month} ${year}`
}



export default function Dates() {

    

    return (
        <>
      {getDate(new Date())}
        </>
    )
}
