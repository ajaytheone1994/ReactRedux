import React, { Component } from 'react'
import { anoterName, addWishes }  from './actions/Myaction'
import { connect } from 'react-redux';
class App extends Component {
 
  render() {
    const wishes=this.props.myWihes.map(item=>{
    return <h2 key={Math.random()}>{item}</h2>
    })
    console.log(this.props)
    return (
      <div style={{textAlign:'center'}}>
  <h1> Hello {this.props.myName}</h1>
  {wishes}
  <button onClick={()=>{this.props.ChangeName()}}>ChangeName</button>&nbsp;&nbsp;
  <button onClick={()=>{this.props.AddWishes()}}>Add Wishes</button>
    </div>
    )
  }
}
  const mapStateToProps = (state, ownProps) => {
  return {
    myName: state.name,
    myWihes:state.wish
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ChangeName: () => { dispatch(anoterName())},
    AddWishes: () => { dispatch(addWishes())}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);