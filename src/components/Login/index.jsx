import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1``;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitLogin = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setError("Email and password cannot be empty.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();
      console.log(users);
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/users";
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  const validate = () => email.trim() !== "" && password.trim() !== "";

  return (
    <Container>
      <Heading>Login Form</Heading>
      <FormContainer onSubmit={submitLogin}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="email">EMAIL</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">PASSWORD</label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </FormContainer>
    </Container>
  );
}

export default Login;
