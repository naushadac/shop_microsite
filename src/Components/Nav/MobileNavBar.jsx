import React from 'react'
import styled from 'styled-components';
import MainLogo from '../logo/MainLogo';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 0;
  display: flex;
  position: fixed;
  border-bottom: 2px solid grey;
  justify-content: space-between;
  
`
const MobileNavBar = () => {
    return (
        <Nav>
            <MainLogo />
            {/* <img src={myLogo} style={{height: "45px", width:"120px"}}  className="my-logo" alt={"My Logo"}  />  */}
            {/* <LogoDiv>
                <img src={myLogo} style={{height: "45px", width:"120px"}}  className="my-logo" alt={"My Logo"}  /> 
            </LogoDiv> */}
            {/* <Burger /> */}
            <Burger />
            {/* <MobileRightNav/> */}
        </Nav>
    )

}

export default MobileNavBar;