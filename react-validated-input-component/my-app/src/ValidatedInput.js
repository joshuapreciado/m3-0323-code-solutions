import { useState } from 'react';


export default function ValidatedInput() {
  const [Password, setPassword] = useState('');


  function response() {
    if (!Password) return 'Password required'
    if (Password.length < 8) {
      return 'Password too short'
    }
  }

  function icon() {
    if (Password.length >= 8) {
      return 'fa-regular fa-square-check fa-beat-fade green'
    }
    return 'fa-regular fa-xmark-large red';
  }

  return (
    <div className="container">
      <label for="pass">Password:</label>
      <div>
        <input onChange={(event) => {
          setPassword(event.target.value);
        }} type="password" id="pass" value={Password}></input>
        <i className={`fa-regular ${icon()}`}></i>
      </div>
      <input type="checkbox" onClick={() => {
        const pass = document.getElementById('pass');
        if (pass.type === 'password') {
          pass.type = 'text';
        } else {
          pass.type = 'password'
        }
      }}></input><p className='showpassword'>Show Password</p>
      <p className="red">{response()}</p>
    </div>
  )

}
