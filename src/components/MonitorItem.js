import React from "react"

const MonitorItem = (props) => {
    const { label, cases } = props

    return(
        <div>
            <h3>
                {label}
            </h3>
            <p>
                {cases}
            </p>
        </div>
    )
};


export default MonitorItem