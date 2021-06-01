import React from 'react'
import myLogo from '../../assets/images/logo.png'
import styled from 'styled-components';

const LogoDiv = styled.div`
    display: flex;
    align-items: center;  
    width: 600px;
    justify-content: center;
    padding-top: 3rem;

    img {
        height: 100%:
        width: 100%;
    }
`;

const ShopLogo = () => {

    return (
        <LogoDiv>
            <img src={myLogo} style={{height: "150px", width:"500px"}}  alt={"Shop Logo"}  /> 
        </LogoDiv>
    )
}

export default ShopLogo;