
import './App.css';

export default function CustomButton({text, color, onCustomClick}) {
  return (
    <button onClick={onCustomClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  )
  }
