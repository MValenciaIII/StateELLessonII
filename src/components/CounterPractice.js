import React from 'react'

function NumCounter(props) {
    console.log(props)
    return(
        <div className="col-sm-4">
            <h3>Current Number:{props.number}</h3>
        </div>
    )
}

function CounterPractice() {
    const [count, setCount] = React.useState(0)
//  const [0, f()] = React.useState(0)
    function add() {

        //First way to pass new Values to useState.
        // setCount(function(prevCount) {
        //     return prevCount + 1
        // })
        
        
        //SECOND WAY TO PASS new values to Usestate variable
        //when setting new parameter always add "prev"
        //ie. "prevCount" 
        
        setCount(prevCount => prevCount + 1)
        
    }

    function subtract() {

        setCount(prevCount => prevCount - 1)
    }


    return (
        <div className="row">
            <div className="col-sm-12 text-center">
                <h1>Counter Practice</h1>
            </div>
            <div className="col-sm-4">
                <input onClick={add} type="button" value="Add" />
            </div>
            {/* variable count is the State Value */}
            {/* Whatever Attribute is named in this Component, We'll use this name to display props in this component */}
            <NumCounter number={count} />
            <div className="col-sm-4">
                <input onClick={subtract} type="button" value="Subtract" />
            </div>
        </div>
    )
}

export default CounterPractice