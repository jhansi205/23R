import React from 'react';

class Lifecycle extends React.component{
    constructor(){
        super()
        console.log("hello fro constructor");
        
    }
}
render(){
    return(
        <>hello from Lifecycle
        {console.log("hello from render")}
        </>
    )
}
export default Lifecycle