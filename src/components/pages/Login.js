import React, {useState} from 'react';
import {FormContainer, PageContainer} from "../shared/Layout";
import {StyledLink} from "../shared/StyledLink";
import {useDispatch} from "react-redux";
import {logIn} from "../../redux/actions/user-actions";
import {useCurrentUser} from "../../hooks/useCurrentUser";

const Login = () => {
  const {signIn} = useCurrentUser();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



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


          <button onClick={signIn}>Login</button>
          <p>don't have an account? <StyledLink to={'/register'}>Register</StyledLink></p>
        </FormContainer>
      </PageContainer>
  );
};

export default Login;