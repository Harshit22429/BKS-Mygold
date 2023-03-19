import { useState } from "react"

import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../config/free"


const Signup = () => {
    // e.preventDefault()
    const navigate = useNavigate()
    const goto = () => {
        navigate('/signin');
    }


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const registerhandler = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setErrorMsg("fill all fields");
            return;
        }
        setErrorMsg('')
        if (password != confirmpassword) {
            alert('password do not match')
        } else {
            // const user = { name, email, password, confirmpassword }
            console.log(name, email, password)
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password);
                updateProfile(res.user, {
                    displayName: name
                })
                navigate('/')
                console.log('message from response', res)

            } catch (error) {
                console.log("message from error", error)

            }
        }
        const datainDB=await fetch("https://harshit-website-66371-default-rtdb.firebaseio.com/createUserData.json",
        {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name, email, password
            })
        })
        console.log('message from real database' , datainDB)
    }
    // const onSubmit = async (e) => {
    // }
    return (
        <>
            <h2 className="text-center">Signup Page</h2>
            <Container>
                <Container>
                    <Form onSubmit={goto}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" value={confirmpassword} onChange={e => setConfirmpassword(e.target.value)} />
                        </Form.Group>
                        <h4>{errorMsg}</h4>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit" onClick={registerhandler}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Container>

            <div className="text-center" style={{ width: 'auto', margin: "30px 10px 10px 10px" }}>
                <h3  >Alreay you have an account ?</h3>
                <Button onClick={goto}>Login</Button>
            </div>
        </>
    )
}
export default Signup