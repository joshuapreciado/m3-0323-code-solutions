import React from 'react';
import { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div>{items[active]}</div>
      <div>
        <CustomButton text="Prev" onSelect={() => {
          setActive((active - 1 + items.length) % items.length)
        }} />
        <Indicators count={items.length} onSelect={(event) => {
          setActive(Number(event.target.textContent))
        }} isActive={active} />
        <CustomButton text="Next" onSelect={() => setActive((active + 1) % items.length)} />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ text, color, isActive, onSelect }) {
  return <button
  onClick={onSelect}
  style={{ backgroundColor: isActive ? color: 'white' }}>{text}</button>;
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, onSelect, isActive, color }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<CustomButton key={i} text={i} color="blue" isActive={isActive === i} />);
  }
  return <div onClick={onSelect}>{buttons}</div>;
}
