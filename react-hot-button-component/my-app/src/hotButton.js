import { useState } from 'react';
import './hotButton.css';

export default function HotButton({color}) {

  const [isClicked, setIsClicked] = useState(0);

  function handleClick() {
    setIsClicked(isClicked + 1);
  }

  if (isClicked > 14) {
    color = 'white'
  } else if (isClicked > 11) {
    color = 'yellow'
  } else if (isClicked > 8) {
    color = 'orange'
  } else if (isClicked > 5) {
    color = 'red'
  } else if (isClicked > 2) {
    color = 'pink'
  } else {
    color = 'darkpurple'
  }

    return (
      <button onClick={handleClick} className={`boton ${color}`}>
        'Hot Button'
      </button>
    )
}
