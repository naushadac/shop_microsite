import React from 'react'
import styled from 'styled-components';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import MainLogo from '../logo/MainLogo';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  border-bottom: 2px solid grey;
  justify-content: space-between;
  align-items: center;  
`

const DesktopNavBar = () => {
    return (
        <Nav>
            <LeftNav />
            <MainLogo />
            <RightNav />
        </Nav>
    )
}

export default DesktopNavBar;