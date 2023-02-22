import React from "react";
import axios from "axios";
import { setAuthToken } from "./helpers/setAuthToken";

function Login() {

    const handleSubmit = (username, pass) => {
        const loginPayload = {
            username: 'admin',
            password: 'fCRmh4Q2J7Rseqkz'
        };

        debugger;

        axios.post("https://localhost:443/signin", loginPayload)
            .then(response => {
                // Get token from response
                const token = response.data.token;

                // Set JWT token to local
                localStorage.setItem("token", token);

                // Set token to axios common header
                setAuthToken(token);

                // Redirect user to home page
                window.location.href = "/";
            })
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            const [username, password] = event.target.children;
            handleSubmit(username, password);
        }}>
            <label for="username">Username</label><br />
            <input type="username" id="username" name="username" /><br />
            <label for="password">Password</label><br />
            <input type="password" id="password" name="password" /><br></br>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Login;