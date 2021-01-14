import React from 'react'

// need to make an arrow function to use React.forwardRef()
// and pass the component as a parameter
const ForwRefInput = React.forwardRef((props, ref) => {
  return(
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
}) 

export default ForwRefInput
