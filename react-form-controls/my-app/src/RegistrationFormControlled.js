import { useState } from "react";


export default function RegistrationFormControlled() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');


  return (
    <form onSubmit={handleSubmit}>
      <label>Username
        <input name="Username" type="text" value={Username}
          onChange={event => setUsername(event.target.value)}></input>
      </label>

      <label>Password
        <input name="Password" type="text" value={Password}
          onChange={event => setPassword(event.target.value)}></input>
      </label>
      <button type="submit" onClick={() => console.log('UserName:', Username, 'Password:', Password)}>Sign Up</button>
    </form>
  )
}
