import React from 'react';
import styled from '@emotion/styled';
import {StyledLink} from "./StyledLink";
import {useAuth} from "../../redux/selectors/useAuth";


const Header = () => {
  const {currentUser, logout} = useAuth();

  return (
      <HeaderContainer>
        <div>Places to eat for <UserName>{currentUser.name}</UserName></div>
        <StyledLink to={'/'} onClick={logout}>Logout</StyledLink>
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
