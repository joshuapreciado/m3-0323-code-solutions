import { useState } from "react";
import './toggleswitch.css'

export default function ToggleSwitch() {
  const [theme, setTheme] = useState('On');
  const toggleTheme = () => {
    if (theme === 'On') {
      setTheme('Off');
    } else {
      setTheme('On');
    }
  };

  return (
    <div className={`center ${theme}`}>
      <input type="checkbox" defaultChecked id="switch" className="checkbox" onClick={toggleTheme}></input>
      <label for="switch" className="empty"></label>
      <h2>{theme}</h2>
    </div>
  );
}
