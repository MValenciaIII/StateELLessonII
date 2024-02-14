import React from 'react'

function ConditionalRendering() {
    const [isShown, setIsShown] = React.useState(false)
    const [messages, setMessages] = React.useState(['a', 'b'])
    // && = and/ Use in conditional situations (if...Else/if... if else.)
    
    
    // let cond1 = true
    // let cond2 = false
    // //&& makes both conditions in "if statements" need to be true to run the code inside
    // if (cond1 && cond2) {
    //     console.log('I have been ran')
    // }


    function toggleShown() {

        setIsShown(prevIsShown => !prevIsShown)
    }



    return(
        <div className="row">
            <div className="col-sm-12">
                <h1>Conditional Rendering</h1>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    {/* This && conditional statement will only RENDER if both sides are true */}
                    {isShown && <p>Hello I'm rendering</p>}
                    {/* If we ever need to change text like this button. Use Ternary */}
                    <button onClick={toggleShown}>{isShown ? "Hide" : "Show" } Text</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    {messages.length > 0 ? <h3>You have {messages.length} unread {messages.length > 1 ? 'messages' : 'message'}</h3> : <h3>You're all caught up</h3>}
                    {/* {messages.length >= 0 && <h3>You have {messages.length} unread messages</h3>} */}
                </div>
            </div>
        </div>
    )
}

export default ConditionalRendering