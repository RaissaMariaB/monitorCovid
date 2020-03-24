import React from "react"

const MonitorItem = (props) => {
    const { label, cases } = props

    return(
        <div>
            <h2>
                {label}
            </h2>
            <p>
                {cases}
            </p>
        </div>
    )
};


export default MonitorItem