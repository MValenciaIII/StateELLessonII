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


    //WHEN TO USE "[]"
    /*
        ARRAYS - its typically used to hold a LIST of items
        //ie. ['a','b','c']
        Destructuring - When you have an array, You're able to give variable names to each index.
        //ie. const [result, setResult] = React.useState('No') 
        //useState = ['No', Func()]
        Computed Properties - (Advance) A dynamic way to target a html element attribute name. 
        //ie. [name] : type === 'checkbox' ? checked : value


    */

        
    //WHEN TO USE "{}"
    /*
        OBJECTS - It's a way to hold detailed information.
        //ie. {
            Firstname: ""
            Lastname: ""
            phone: 691-911-8459
        }
        REACT WRITING JS - In order to write javascript in functional component HTML. Wrapped "{}" in the DOM.
        //ie.<h3 onClick={changeAnswer}>Is State important?</h3>
        //ie.{isShown && <p>Hello I'm rendering</p>}
        DESTRUCTURING - Break down each Object attribute to a variable. 
        //ie. const {name, value, type, checked} = event.target
        
    */

        //WHEN TO USE "()"
    /*
        
        
    */

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