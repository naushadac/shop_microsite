import React from 'react'
import styled from 'styled-components';
import {RightNavList} from '../../constants/constants'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
        color: red;
    }

    a {
        text-decoration: none;
        color: green;

    }
`;



const RightNav = () => {
    return (
        <Ul>
            {RightNavList.map((item, index) => {
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

export default RightNav;