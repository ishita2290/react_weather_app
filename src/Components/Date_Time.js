import React from 'react'

function Date_Time(props) {
    return (
        <div>
            {props.date_time && <p>{props.date_time}</p>}
        </div>
    )
}

export default Date_Time
