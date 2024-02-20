import React from 'react'
import PropsReceive from './PropsReceiver';


function Props() {
    //STATE is HOOKED (BELONGS TO THIS COMPONENT "Props")
    const [data, setData] =  React.useState(['apple','orange','banana'])


    return(
        <div className="row">
            <div className="col-sm-12">
                <h1>Hello Props</h1>
                {/* Properties Values we pass thru creation of HTML attributes  */}
                <PropsReceive fruitData={data} number={3} name="Mikel"/>
            </div>

        </div>
    )
}

export default Props;