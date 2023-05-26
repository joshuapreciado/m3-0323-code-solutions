import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css'

export default function AppDrawer() {
  const [Drawer, setDrawer] = useState(false);

  function handleClick(event) {
    if (event.target.className === 'menu') {
      setDrawer(false)
    }
  }

    let menu = null;
    if (setDrawer) {
       menu = (
        <div className="menu" onClick={handleClick}>
          <div className="items">
            <h1 onClick={(event) => {
              setDrawer(!Drawer)
            }} >Test1</h1>
             <h2 onClick={(event) => {
               setDrawer(!Drawer)
             }}>Test2</h2>
          </div>
        </div>
      )
    }

  return (
    <>
    <div className="test" onClick={(event) => {
      setDrawer(!Drawer)
    }}><FaBars className="fabar" /></div>{menu}
    </>
  )


}
