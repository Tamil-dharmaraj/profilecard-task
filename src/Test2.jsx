import React from 'react'

const Test2 = (props) => {
    const abc = props.shopfood;
  return (
    <div>
        <ol>
        {abc.map((index) => (
          <li key={index.id}>{index.name} {index.price} </li>
        ))}
      </ol>

    </div>
  )
}

export default Test2