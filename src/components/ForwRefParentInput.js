import React, { Component } from 'react'
import ForwRefInput from './ForwRefInput'

class ForwRefParentInput extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
  }
  
  clickHandler = () => {
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <ForwRefInput ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus ForwRef Input</button>
      </div>
    )
  }
}

export default ForwRefParentInput
