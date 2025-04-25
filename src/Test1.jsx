import React from 'react'

const Test1 = (props) => {
  return (
    <div>
        <h1> the title:{props.title}</h1> 
        <h1> the description:{props.description}</h1>
    </div>
  )
}
Test1.defaultProps = {
    title:"default",
    description:"default"
}
export default Test1