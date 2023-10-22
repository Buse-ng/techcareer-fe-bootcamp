import React, { useState } from "react";

function StateSample() {

    const [width, setWidth] = useState(200)
    const [height, setHeight] = useState(200)
    
    const [newWidth, setNewWidth] = useState(200)
    const [newHeight, setNewHeight] = useState(200)


    const divStyle={
        border:"1px solid",
        width: `${width}px`,
        height: `${height}px`,
        borderColor:"gray"
    };

    const widthChange=(e)=>{
        setNewWidth(parseInt(e.target.value));
    };
    const heightChange=(e)=>{
        setNewHeight(parseInt(e.target.value));
    };

    
    const changeButton=()=>{
        setWidth(newWidth);
        setHeight(newHeight); 
    };

  return (
    <>

      <div>
        <label htmlFor="divWidth">Width: </label>
        <input type="number" name="divWidth" value={newWidth} onChange={widthChange}/> <br /><br />

        <label htmlFor="divHeight">Height: </label>
        <input type="number" name="divHeight" value={newHeight} onChange={heightChange} /> <br /><br />
      </div>

      <div>
        <button onClick={changeButton}>Change</button> <br /><br />
      </div>


      <div style={divStyle}></div>
    </>
  );
}

export default StateSample;
