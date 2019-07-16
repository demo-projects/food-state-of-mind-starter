import React from 'react';
import {FormContainer, PageContainer} from "../shared/Layout";

const Register = () => {

  return (
      <PageContainer>
        <h1>Register</h1>
        <FormContainer>
          <input type="text"
                 placeholder={"Your full name..."}
                 name="name"

          />
          <input type="text"
                 placeholder={"Your email..."}
                 name="email"

          />
          <input type="password"
                 placeholder={"Your password..."}
                 name="password"

          />
          <button>Register</button>
        </FormContainer>
      </PageContainer>
  );
};

export default Register;