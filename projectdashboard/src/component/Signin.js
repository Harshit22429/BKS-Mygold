import {useState} from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';

import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../config/free"
const Signin = () => {
    const navigate = useNavigate()
    const goto = () => {
        navigate('/signup');
    }


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const registerhandler = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMsg("fill all fields");
            return;
        }
        setErrorMsg('')
        
            // const user = { name, email, password, confirmpassword }
            console.log( email, password)
            try {
                const res = await signInWithEmailAndPassword(auth, email, password);
                // updateProfile(res.user, {
                //     displayName: name
                // })
                navigate('/')
                console.log('message from response', res)

            } catch (error) {
                console.log("message from error", error)

            }
        

    }


    return (
        <>
            <h2 className='text-center'>Signin Page</h2>
            <Container>
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  value={email} onChange={e => setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <h5 className='text-center' style={{color:"red"}}>{errorMsg}</h5>
                        <Button variant="primary" type="submit" onClick={registerhandler}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Container>
            <div className='text-center' style={{ width: 'auto', margin: "30px 10px 10px 10px" }}>
                <h3>have you no account ?</h3>
                <Button onClick={goto}>Register as a new user</Button>
            </div>
        </>
    )
}
export default Signin