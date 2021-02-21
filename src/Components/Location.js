import React from 'react'


function Location(props) {
    return (
        <p>
            {props.city && props.country && <p>{props.city},{props.country}</p>}
        </p>
    )
}

export default Location
