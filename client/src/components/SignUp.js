import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

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
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username: </Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter your username" value={username} onChange={handleChange} required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" name="password" placeholder='Password' value={password} onChange={handleChange} required/>
            </Form.Group>
            <Button variant="primary" type="submit">Sign Up</Button>
            {errors ? <Alert variant="warning">{errors}</Alert> : null}
        </Form>
    )
}

export default SignUp