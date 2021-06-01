import React from 'react'
import styled from 'styled-components';

const ButtonDiv = styled.div`
    display: flex;
    align-items: center;  
    justify-content: center;
    color: #fff;
    font-size: 16px;

    button {
        border-radius: 6px;
        border: none;
        outline : none;
        font-weight:  bold;
    }
`;

const Button = (props) => {

    function checkClick () {
        console.log("Hello")
        props.onClick();
    }

    return (
        <ButtonDiv >
            <button 
                onClick={() => checkClick()}
                disabled={props.disabled?props.disabled:false}
                style={{
                    height: props.height, 
                    width: props.width,
                    backgroundColor: props.fill?props.fill:"green",
                    color: props.color? props.color:"#fff",
                    fontSize:"18px"}}>
                {props.value} 
            </button>
        </ButtonDiv>
    )
}

export default Button;