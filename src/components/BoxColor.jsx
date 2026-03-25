import { useState, useEffect, useRef } from "react";

function BoxColor ({color, value}) {
  const boxRef = useRef(null)
  const [classList, setClassList] = useState('')
  const boxCss = {
    backgroundColor: classList.value === `box ${value}` ? color : null,
    border: `1px solid ${color}`,
    color:`${color}`
  }
  useEffect(() => {
    setClassList(boxRef.current.classList)
  }, [value])   
  return (
    <>
    <div
    className={`box ${color}`}
    style={boxCss}
    ref={boxRef} > 
    {color === value ?<h2 style={{color: 'black'}}>Yes, I'm a {value} color</h2> : <h2>I'm not a {value} color</h2>}
   
    </div>
    </> 
  )
}
export default BoxColor;  
