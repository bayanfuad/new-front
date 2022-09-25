function SigninForm({ sifunc }) {


    return (
        <div className='inForm'>
            <form onSubmit={sifunc}>
                <input placeholder='Enter Username' name='username' type='text' id="input" required ></input>
                <input placeholder='Enter Password' name='password' type='text' id="input" required ></input>
                <input name='submit' type='submit' value='Signin' id="bt"></input>
            </form>
        </div>
    )
}

export default SigninForm