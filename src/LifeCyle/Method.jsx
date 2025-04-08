import React, { Component } from 'react'

export default class Method extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true,
      count:0
    }
  }
  delheader =()=>{
    this.setState({show:false})
  }

  componentDidMount(){
    console.log('componentDidMount Method')
  }

  componentDidUpdate(){
    console.log('componentDidupdate method')
  }
  render() {
    let myheader;
    if(this.state.show){
      myheader = <Child/>
    }
    return (
      <div>
        <center>
          {myheader}
          <button type='button' onClick={this.delheader}>Delete Header</button>
          <hr/>
          <h3>count:{this.state.count}</h3>
          <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        </center>
      </div>
    )
  }
}

class Child extends Component{
  componentWillUnmount(){
    console.log('componentwillunmount method')
  }
  render(){
    return(
      <h1>Hello!world</h1>
    )
  }
}