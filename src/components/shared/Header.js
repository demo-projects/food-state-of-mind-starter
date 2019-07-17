import React from 'react';
import styled from '@emotion/styled';
import {StyledLink} from "./StyledLink";
import {useCurrentUser} from "../../hooks/useCurrentUser";

const Header = ({user}) => {
  const {signOut} = useCurrentUser();

  return (
      <HeaderContainer>
        <div>Places to eat for <UserName>{user.name}</UserName></div>
        <StyledLink onClick={signOut} to={'/'}>Logout</StyledLink>
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
