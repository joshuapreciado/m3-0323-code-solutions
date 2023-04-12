export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault()
    const forminput = event.target;
    const FormDatajs = new FormData(forminput);
    const forms = Object.fromEntries(FormDatajs.entries());
    console.log(forms);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Username
      <input name="Username" type="text"></input>
      </label>

      <label>Password
      <input name="Password" type="text"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
