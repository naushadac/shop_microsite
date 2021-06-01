import React from 'react'
import myLogo from '../../assets/images/logo.png'
import styled from 'styled-components';

const LogoDiv = styled.div`
    display: flex;
    align-items: center;  
    width: 160px;
    justify-content: center;
    padding-top: 5px;

    img {
        height: 100%:
        width: 100%;
    }
`;

const MainLogo = () => {

    return (
        <LogoDiv>
            <img src={myLogo} style={{height: "45px", width:"120px"}}  className="my-logo" alt={"My Logo"}  /> 
        </LogoDiv>
    )
}

export default MainLogo;