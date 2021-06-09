
import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../CSS/Login.css'


function Login() {

    let isLogin = useState(false);


    return (
        <div className = 'login'>
            <Container>
                <Form>
                    <Form.Label>Register</Form.Label>

                    <Form.Group> 
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail"> 
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                {/* <img src="./logo.png" alt="" className="login_logo"/> */}
                <p className="register_lbl">Already have an account?</p>
            </Container> 
            

            
            
        </div>
    )
}

export default Login
