import React, { useState } from 'react';
const Box = () => {
  const initialColors = Array(9).fill('#ccc');
  const [box, setbox] = useState(initialColors);
  const [sequence, setsequence] = useState([]);
const [reset, setreset]=useState(false);
  const handleBoxClick = (index) => {
    if (box[index] === 'green') return;

    if (index === 8) {
      changeColorsToOrange();
      return;
    }

    const newColors = [...box];
    newColors[index] = 'green';
    setbox(newColors);
    setsequence([...sequence, index]);

  };

  const changeColorsToOrange = () => {
    const newColors = [...box];

    sequence.forEach((i, idx) => {
      setTimeout(() => {
        newColors[i] = 'orange';
        setbox([...newColors]);
      }, idx * 500);
    });
    setreset(true);
  };

  return (
    <>
      <div className='container'>
        {box.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleBoxClick(index)}
          ></div>
        ))}

      </div>
      {reset&&<button style={{ display: "block", padding: "10px", width: "100px", margin: "auto", marginTop: "10px" }} onClick={() => {setbox(initialColors); setsequence([]); setreset(false)}}>Reset</button>}
    </>
  );
};

export default Box;
