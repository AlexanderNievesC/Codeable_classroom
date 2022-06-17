import styled from "@emotion/styled";
import { login } from "../services/sessions-service";

const Container = styled.div`
  margin: 96px auto;
  max-width: 360px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 258px;
`;

function Login({ setUser }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const credentials = {
      email: email.value,
      password: password.value,
    };

    login(credentials)
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }
  return (
    <Container>
      <h1>Welcome to your Classroom</h1>
      <StyledForm onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          id="email"
          label="email"
          type="email"
          placeholder="test4@mail.com"
        />
        <label>Password</label>
        <input
          id="password"
          label="password"
          type="password"
          placeholder="123456"
        />
        <button type="submit">Log in</button>
      </StyledForm>
    </Container>
  );
}

export default Login;
