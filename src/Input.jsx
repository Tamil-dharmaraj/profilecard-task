import React, { Component } from 'react'

 class Input extends Component {
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
      </div>
    )
  }
}

export default Input