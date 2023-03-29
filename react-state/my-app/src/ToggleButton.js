
import { useState } from 'react';

export default function ToggleButton({ text, color, handleClick}) {

  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(!isClicked);
    console.log(handleClick);
  }

  if (!isClicked) {
    return (
      <button onClick={handleClick} style={{backgroundColor: 'white'}}>
      {text}
      </button>
    )
  }

  return (
    <div>
      <button onClick={() =>
        handleClick()} style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  )
}
