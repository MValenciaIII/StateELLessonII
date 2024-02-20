import React from 'react'


function PropsReceive(props) {
    console.log(props)

    const displayFruit = props.fruitData.map((currentItem) => <p>{currentItem} {props.number}</p>)

    return (

        <div className="row">
            <div className="col-sm-12">
                <h1>Hello Receiver</h1>
                {displayFruit}
            </div>
        </div>
    )
}

export default PropsReceive