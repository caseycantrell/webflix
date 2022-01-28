import { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function SignUp() {

    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);

    const [ firstName, setFirstName ] = useState("");
    const [ emailAddress, setEmailAddress ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");
    
    const isInvalid = firstName === "" || password === "" || emailAddress === "";

    const handleSignUp = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => result.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1
            }).then(() => {
                navigate(ROUTES.BROWSE);
            }).catch((error) => {
                setFirstName("");
                setEmailAddress("");
                setPassword("");
                setError(error.message);
            })
        );
    };

    return (
    <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>

                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignUp} method="POST">

                    <Form.Input 
                        placeholder="First Name" 
                        value={firstName} 
                        onChange={({ target }) => setFirstName(target.value)}/>
                    <Form.Input 
                        placeholder="Email address" 
                        value={emailAddress} 
                        onChange={({ target }) => setEmailAddress(target.value)} />
                    <Form.Input 
                        placeholder="Password"
                        value={password}
                        type="password"
                        onChange={({ target }) => setPassword(target.value)} />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up
                    </Form.Submit>

                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                    </Form.Text>

                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </Form.TextSmall>

                </Form.Base>
            </Form>
        </HeaderContainer>

        <FooterContainer />
    </>
    );
}