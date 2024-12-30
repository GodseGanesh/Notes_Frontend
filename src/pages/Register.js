import React from 'react'

function Register() {
    let register_user = async (e) =>{
        e.preventDefault()
        console.log(e.target.username.value)
        console.log(e.target.password.value)
    }
  return (
    <div>register
        <form onSubmit={register_user}>
            <input type='text' name='username' />
            <input type='password' name='password' />
            <input type='submit' />
        </form>
    </div>
  )
}


export default Register