import React, { useState } from 'react';

function SignUp() {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const {username, password} = formData;

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }
        console.log(user)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Signup</label><br></br>
            username<input type="text" name="username" value={username} onChange={handleChange} required />
            password<input type="password" name="password" value={password} onChange={handleChange} required />
            <input type="submit" value="Login" />
            {errors?<h2>{errors}</h2>:null}
        </form>
    )
}

export default SignUp