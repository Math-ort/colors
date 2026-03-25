import { useState, useRef } from "react";
import BoxColor from "./BoxColor";

function MyForm() {
  const [value, setValue] = useState('')
  const imputRef = useRef(null)
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  return (
    <>
    <input type="text" 
      placeholder="Introduce el color" 
      onChange={() =>setValue(imputRef.current.value) } 
      value={value} 
      ref={imputRef} 
    />
   
    <div className="container">
      {colors.map((color, index ) => {
        return (<BoxColor key={index} color={color} value={value } />)
      })} 
    </div>
    </> 
  );
}  

export default MyForm;