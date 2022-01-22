import { useState } from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";

export default function Signin() {

    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const isInvalid = password === "" || emailAddress === "";
    const handleSignIn = (event) => {
        event.preventDefault();
    }

    return (
    <>
    <HeaderContainer>
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSignIn} method="POST">Sign In</Form.Base>
            <Form.Input 
                placeholder="Email address" 
                value={emailAddress} 
                onChange={({target}) => setEmailAddress(target.value)} />
            <Form.Input 
                autoComplete="off"
                type="password"
                placeholder="Password" 
                value={password} 
                onChange={({target}) => setPassword(target.value)} />
            <Form.Submit disable={isInvalid} type="submit">
                Sign In
            </Form.Submit>
        </Form>
    </HeaderContainer>
    <FooterContainer></FooterContainer>
    </>
    );
}