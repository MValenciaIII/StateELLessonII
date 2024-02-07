// import React,   {useState} from 'react'
import React from 'react'


function State() {
    //1st way to call STATE
    //const result = React.useState('No');
    //2nd way to CALL state
    // const resultsecond = useState();

    //React practice result is variable name of DEFAULT VALUE
    //setResult is function
    const [result, setResult] = React.useState('No')

    
    console.log(result)
    //Received an ARRAY with two Values
    //['Hello World', func()]

    //result[0] renders 'No'

    function changeAnswer() {
        //anytime you want a new value, you'll call setNAME() with new value inside ('VALUE')
        setResult('Stop clicking me')
    }






    return(
        <div className="row">
            <div className="col-sm-12">
                <h3 onClick={changeAnswer}>Is State important?</h3>
            </div>
            <div className="col-sm-12">
                <h5>{result}</h5>
            </div>
        </div>
    )
}

export default State