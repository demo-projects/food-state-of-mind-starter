import React from 'react';
import styled from '@emotion/styled';
import {StyledLink} from "./StyledLink";

const Header = () => {

  return (
      <HeaderContainer>
        <div>Places to eat for <UserName>Nir Kaufman</UserName></div>
        <StyledLink to={'/'}>Logout</StyledLink>
      </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;  
  margin-bottom: 15px;
  padding: 15px 25px;
`;

const UserName = styled.span`
  color: mediumpurple;
`;

export default Header;
