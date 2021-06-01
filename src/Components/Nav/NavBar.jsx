import React from 'react'
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { DevicesSize } from '../../constants/constants';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const NavDiv = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  border-bottom: 2px solid grey;
  justify-content: space-between;
  align-items: center;

  
`

const NavBar = () => {

    const isMobile = useMediaQuery({ maxWidth: DevicesSize.mobile})

    return (
        <NavDiv>
            {!isMobile && <DesktopNavBar />}
            {isMobile && <MobileNavBar />}
        </NavDiv>
    )

}

export default NavBar;