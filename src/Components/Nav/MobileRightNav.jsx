import React from 'react'
import styled from 'styled-components';
import {MobileNavList} from '../../constants/constants'

const Ul = styled.ul`
    
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    background-color: black;
    positon: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3rem;
    font-size: 28px;
    transition: transform 0.3s ease-in-out;

    li {
        text-align: left;
        padding: 18px 0;
        padding-left: 10px;
        color: red;
    }

    a {
        text-decoration: none;
        color: white;

    }
`;


const MobileRightNav = ({ open }) => {
    
    return (
        <Ul open={open}>

            {MobileNavList.map((item, index) => {
                return(
                    
                    <li>
                        <a href={item.url} >{item.name}
                        </a>  
                    </li>
                )
            })}
        </Ul>
    )
    

}

export default MobileRightNav;