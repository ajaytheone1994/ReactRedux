import React, { Component } from 'react'

export default class Home extends Component {
    state={
        HomeName:'Ajay Batham'
    }

    render() {
        return (
            <div>
                <h1>I am from Home {this.state.HomeName}</h1>
                <button onClick={()=>this.props.handleChildName(this.state.HomeName)}>ChangeName</button>
            </div>
        )
    }
}
