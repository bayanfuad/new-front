function SingupForm({ sufunc }) {

    return (
      <div className='upForm' >
        <form onSubmit={sufunc}>
          <input placeholder='Enter Username' name='username' type='text' id="input" required></input>
          <input placeholder='Enter Email' name='email' type='email' id="input" required></input>
          <input placeholder='Enter Password' name='password' type='text' id="input" required></input>
          <input name='submit' type='submit' value='Signup' id="bt"></input>
        </form>
      </div>
    )
  }
  
  export default SingupForm

  