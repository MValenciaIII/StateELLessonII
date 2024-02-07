import React from 'react'

function MappingUpdate() {
    //without USESTATE our thingsElement variable isn't updating on the page
    const thingsArray = ['Thing 1', 'Thing 2'];
    const thingsElements = thingsArray.map(
        (thing) => <p>{thing}</p>
    ) 

    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThingText)
        console.log(thingsArray)
    }

    // const [things, setThings] = React.useState(['Thing 1', 'Thing 2'])

    // function addItem() {
    //     const newThingText = `Thing ${things.length + 1}`
    //     setThings(prevState => [...prevState, newThingText])
    // }

    // const thingsElements = things.map(
    //      (thing) => <p>{thing}</p>
    //      )


    return(
        <div className="row">
            <div className="col-sm-12">
                <button onClick={addItem}>Add Item</button>
                {thingsElements}
            </div>
        </div>
    )
}

export default MappingUpdate