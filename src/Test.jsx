import React from 'react'

const Test = (props) => {
  const update = (props.status == "online") ? "This is online" : "This is offline";
  return (
    <div>
<p>{update}</p>
    </div>
  )
}

export default Test