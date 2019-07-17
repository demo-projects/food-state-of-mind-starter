import React, {useState} from 'react';
import {FormContainer, PageContainer} from "../shared/Layout";
import {StyledLink} from "../shared/StyledLink";
import {useAuth} from "../../hooks/useAuth";

const Login = () => {
  const {login} = useAuth();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
      <PageContainer>
        <h1>Login</h1>
        <FormContainer>
          <input type="text"
                 placeholder={"Your email..."}
                 onChange={({target}) => setEmail(target.value)}/>

          <input type="password"
                 placeholder={"Your password..."}
                 onChange={({target}) => setPassword(target.value)}/>

          <button onClick={() => login({name: 'Nir Kaufman'})}>Login</button>

          <p>don't have an account? <StyledLink to={'/register'}>Register</StyledLink></p>
        </FormContainer>
      </PageContainer>
  );
};

export default Login;