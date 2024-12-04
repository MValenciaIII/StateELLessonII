import React from 'react'


function UseEffect() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1);
    // console.log("Component rendered")

        
    // side effects
    //Called just like useState
    
    //two parameters inside our useEffect()
    //one Required and second optional.
    //Parameter one = callback function
    //Second parameter = Array Dependecy list
    //It's an array list that watches certain variables changes and if changed React.useEffect will be ran.

    React.useEffect(() => {
        console.log("Effect Function ran")
        fetch(`https://swapi.py4e.com/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    // set Array Dependcy list EMPTY if you only want it ran once
    // UseEffect will always run once on page loads, but not again unless the ARRAY DEPENDECY has variable changes its looking for


    return(
        <div className="row">
            <div className="col-sm-12">
                <h1>Helllo useEffect</h1>
            </div>
            <div className="col-sm-12">
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h3 onClick={() => setCount(prevCount => prevCount + 1)}>{count}</h3>
            </div>
        </div>
    )
}


export default UseEffect