import React from 'react'

function Forms() {
    const [formDataAll, setFormDataAll] = React.useState([])
    const [formData, setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isFriendly: false,
        employment: "",
        favColor: ""
    })
    

    console.log(formData)

    function handleEvent(event) {
        //event.target.value = grabbing HTML value from the current element
        //ie. <input First Name text box />
        console.log(event.target.name)


        //REACT PRACTICE USUALLY DESTRUCTS OBJECTS and sets it as a VARIABLE
        //ie. v
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                //ES6 Computed Properties
                //Whatever current HTML element is calling handleEvent() the "event.target.name" gives us the name Value from that HTML element. 
                [name] : type === 'checkbox' ? checked : value
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

    function handleSubmit(event) {
        //It PREVENTS our page from REFRESHING and re-rendering the page
        event.preventDefault()

        console.log(formData)
    }


    return(
        <div className="row">
            <div className="col-sm-12">
                <h1>Forms</h1>
            </div>
            <div className="col-sm-6">
                {/* form has a attribute that handles submitting. onSubmit={RUNFUNCTIONs} */}
                <form onSubmit={handleSubmit}>


                    {/* onChange = Anytime there is a change in the value or typed in this element. handleEvent Function will be ran */}
                    <input type="text" placeholder="First Name" name="firstName" id="" onChange={handleEvent} value={formData.firstName} />


                    {/* name attribute allows us to uniquely identify current Element 
                        MAKE SURE name attribute "VALUE" is the same exact as target STATE variable
                    */}
                    <input type="text" placeholder='Last Name' name="lastName" onChange={handleEvent} value={formData.lastName}/>


                    {/* Make sure to set value to STATE variable  */}
                    <input type="text" placeholder="Email" name="email" onChange={handleEvent} id="" value={formData.email} />

                    <textarea name="comments" placeholder='Comments' onChange={handleEvent} value={formData.comments} id="" cols="30" rows="10"></textarea>

                    <input type='checkbox' id='isFriendly' name='isFriendly' value={formData.isFriendly} checked={formData.isFriendly} onChange={handleEvent}/>
                    <label htmlFor='isFriendly'>Are you friendly?</label>

                    
                    <fieldset>
                        <legend>What is your current employment?</legend>

                        {/* RADIO BUTTONS to set Controlled Component. We use a CHECKED attribute and set it as a Condition between State Variable and input Value  */}
                        <input type="radio" name="employment" id="unemployed" value="unemployed" onChange={handleEvent} checked={formData.employment === "unemployed"}/>
                        <label htmlFor='unemployed'>Unemployed</label>
                        <br />
                        <input type="radio" name="employment" id="full-time" value="full-time" onChange={handleEvent} checked={formData.employment === "full-time"}/>
                        <label htmlFor='full-time'>Full Time</label>
                        <br />
                        <input type="radio" name="employment" id="part-time" value="part-time" onChange={handleEvent} checked={formData.employment === "part-time"}/>
                        <label htmlFor='part-time'>Part Time</label>
                        <br />
                    </fieldset>

                    <br />
                    <label htmlFor="favColor">What is your favorite color?</label>
                    <br />
                    <select id="favColor" value={formData.favColor} name="favColor" onChange={handleEvent}>
                        <option value="">Choose Color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>
                    <br />
                    <br />
                    {/* If a button element is found inside a form tag. It automatically is seen as a submit. */}
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Forms