import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const colorPara= useRef(null);
    const colors =["red","green","yellow","purple","brown"];

    const stylePara = ()=>{
        const randomColor =Math.floor(Math.random()*colors.length);
        colorPara.current.style.color=colors[randomColor];
    }

    useEffect(()=>{
    console.log(colorPara);
    console.log(colorPara.current);
    }
    );
  return (
    <div>
        <button onClick={()=>{stylePara}}>click me</button>
        <p ref={colorPara}>useffect</p>
    </div>
  )
}

export default UseRef