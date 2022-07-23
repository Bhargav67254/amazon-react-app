import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import Button from "@mui/material/Button";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loginUser, setLoginUser] = useState(false);

  function SignupWithEmail(e) {
    e.preventDefault();
    if (password === rePassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          user.user.updateProfile({
            displayName: name,
          });
        })
        .then(() => {
          setName("");
          setEmail("");
          setPassword("");
          setRePassword("");
          setLoginUser(true);
        })
        .catch((error) => alert(error));
    } else {
      alert("Password doesn't match please re-enter password");
    }
  }

  function LoginWithEmail(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
      })
      .catch((err) => alert(err));
  }

  return (
    <Container>
      <Wrapper>
        <img src="3.png" alt="" />
        {loginUser === false ? (
          <Form>
            <h1>Create account</h1>
            <input
              type="text"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Re-enter password"
              required
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <button type="submit" hidden onClick={SignupWithEmail}></button>
            <SignupButton onClick={SignupWithEmail}>Continue</SignupButton>
          </Form>
        ) : (
          <Form>
            <h1>Sign-in</h1>
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" hidden onClick={LoginWithEmail}></button>
            <LoginButton onClick={LoginWithEmail}>Continue</LoginButton>
          </Form>
        )}
        {loginUser === false ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setLoginUser(true)}>Sign-in</span>
          </p>
        ) : (
          <p>
            New to Amazon-Clone?{" "}
            <span onClick={() => setLoginUser(false)}>Create Your Account</span>
          </p>
        )}
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
  background-color: white;
  border-radius: 10px;
  @media screen and (max-width: 380px) {
    width: 300px;
    padding: 80px 10px;
  }
  img {
    width: 150px;
    margin-bottom: 20px;
  }
  p {
    font-weight: 500;
    margin-top: 20px;
  }
  span {
    color: #4860f8;
    cursor: pointer;
    :hover {
      color: #fc5454;
      text-decoration: underline;
    }
  }
`;
const Form = styled.form`
  display: flex;
  border: 1px solid lightgray;
  padding: 15px;
  flex-direction: column;
  border-radius: 5px;

  input {
    padding: 8px 15px;
    margin: 15px 0px;
    width: 300px;
    outline-color: #f0c14b;
  }

  h1 {
    font-weight: 400;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 500px) {
    input {
      margin: 20px 0px;
    }
  }

  @media screen and (max-width: 380px) {
    input {
      width: 260px;
      margin: 20px 0px;
    }
  }
`;

const SignupButton = styled(Button)`
  width: 300px !important;
  background-color: #f0c14b !important;
  color: black !important;
  font-weight: 500 !important;
  margin: 15px 0px 10px 0px !important;

  @media screen and (max-width: 380px) {
    width: 260px !important;
  }
`;
const LoginButton = styled(Button)`
  width: 300px !important;
  background-color: #f0c14b !important;
  color: black !important;
  font-weight: 500 !important;
  margin: 10px 0px !important;
  @media screen and (max-width: 380px) {
    width: 260px !important;
  }
`;
