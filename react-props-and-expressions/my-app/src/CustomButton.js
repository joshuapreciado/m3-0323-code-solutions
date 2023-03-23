import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

export default function CustomButton(props) {
  return <button className={props.className}>{props.text}</button>
}

const element = (
  <div>
   <CustomButton className="ButtonColor" text="I" />
    <CustomButton className="ButtonColor2" text="know" />
    <CustomButton className="ButtonColor3" text="React!" />
  </div>
)

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
