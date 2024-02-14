import React from 'react'

function Forms() {
    const [formData, setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email:""
    })
    

    console.log(formData)

    function handleEvent(event) {
        //event.target.value = grabbing HTML value from the current element
        //ie. <input First Name text box />
        console.log(event.target.name)

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                //ES6 Computed Properties
                //Whatever current HTML element is calling handleEvent() the "event.target.name" gives us the name Value from that HTML element. 
                [event.target.name] : event.target.value
            }
        })

        // if(event.target.name === "firstName") {
        //     setFormData(prevFormData => {
        //     return {
        //         ...prevFormData,
        //         //ES6 Computed Properties
        //         //Whatever current HTML element is calling handleEvent() the "event.target.name" gives us the name Value from that HTML element. 
        //          firstName : event.target.value
        //         }
        //     })
        // }  else if(event.target.name === "lastName") {
        //     setFormData(prevFormData => {
        //     return {
        //         ...prevFormData,
        //         //ES6 Computed Properties
        //         //Whatever current HTML element is calling handleEvent() the "event.target.name" gives us the name Value from that HTML element. 
        //          lastName : event.target.value
        //         }
        //     })
        // }
    }


    return(
        <div className="row">
            <div className="col-sm-12">
                <h1>Forms</h1>
            </div>
            <div className="col-sm-6">
                <form action="">
                    {/* onChange = Anytime there is a change in the value or typed in this element. handleEvent Function will be ran */}
                    <input type="text" placeholder="First Name" name="firstName" id="" onChange={handleEvent} value={formData.firstName} />
                    {/* name attribute allows us to uniquely identify current Element */}
                    <input type="text" placeholder='Last Name' name="lastName" onChange={handleEvent} value={formData.lastName}/>
                    <input type="text" placeholder="Email" name="email" onChange={handleEvent} id="" />
                </form>
            </div>
        </div>
    )
}

export default Forms