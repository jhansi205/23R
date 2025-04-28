import React from "react";

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        console.log("Hello from Constructor");
        this.state={
          count:0,
          data:null
        }
    }
 static getDerivedStateFromProps(props,state){
    console.log("hello from state props");
    console.log(props.count);
   
   if(props.count===state.count){
    console.log(props.count);
    
    return null
   }else{
    
   return({count:props.count})
   }
 }
 componentDidMount(){
    console.log('component did mount');
    fetch("https://fakestoreapi.com/products").then(data=>data.json()).then((prodata)=>this.setState({data:prodata})).catch((err)=>console.log(err))
    
    
    
 }
    render() {

        return (
            <>
                Hello from Lifecycle
                {console.log("Hello from render")}
                <h1>{this.state.count}</h1>
{this.state.data?.map((ele,index)=>
     <h1 key={index}>{ele.title}</h1>
     
)}
            </>
        );
    }
}

export default Lifecycle;
