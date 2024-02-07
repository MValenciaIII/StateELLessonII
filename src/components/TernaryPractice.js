import React from 'react'

function TernaryPractice() {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

    const murderIf = 'false';
    const murderName = "Jim Crawford"

    //First way of Ternary Operator
    //murderIf == condition being checked
    //let answer = murderIf == true ?"Yes" : "No"

    //TRUTHY/TRUE will be the left side of ":"
    //FALSEY/False will be the right side of ":"
    //second Way of Ternary Operator
    let answer = murderIf ? "Yes" : "No"

    let killer = murderName === 'Butler' ? "He's the killer" : "You shant the killer"

    return(
        <div className="row">
            <div className="col-sm-12 text-center">
                <h1>Ternary Practice</h1>
            </div>
            <div className="col-sm-4 text-center">
                <h2>Was there a murder in Savannah</h2>
                <h4>{answer}</h4>
                <h4>{killer}</h4>
            </div>
        </div>
    )
}


export default TernaryPractice
