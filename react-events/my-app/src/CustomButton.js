
import './App.css';

export default function CustomButton({text, color, onCustomClick}) {
  return (
    <button onClick={() =>
    onCustomClick(text, color)} style={{ backgroundColor: color }}>
      {text}
    </button>
  )
  }
