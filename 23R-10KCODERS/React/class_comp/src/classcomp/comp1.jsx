import React from 'react'

class Firstcomp extends React.Component{
   constructor(props){
    super(props)
    this.state={
        count:0,
    }
   }
 handleDecrement=()=>{
    if(this.state.count>0){
    this.setState({count:this.state.count-1})
    }   
   };
    render(){
       
        console.log(this.state)
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>
            <button onClick={this.handleDecrement}>decrement</button>
            </>
        )
    }

}
export default Firstcomp
