import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }
  height_ref=React.createRef()

  static getDerivedStateFromProps(nextprops, prevstate) {
    console.log("Derived state from props");
    
    // Only update state if the count has changed
    if (nextprops.count !== prevstate.count) {
      return { count: nextprops.count };
    }
    return null; // Prevents unnecessary state updates
  }

  shouldComponentUpdate(nextprops, nextstate) {//optional
    console.log("Should component update?");
    
    // Compare with current state, not next state
    if (this.state.count !== nextprops.count) {
      return true;
    }
    return false;
  }
  getSnapshotBeforeUpdate(){
    console.log(this.height_ref);
    return({height_ref:this.height_ref.current.height})
    
  }
componentDidUpdate(){
  console.log("component updated");
  
}

  render() {
    console.log("Rendering");

    return (
      <div ref={this.height_ref} style={{overflowY:"scroll",height:"100px"}}>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>

        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
