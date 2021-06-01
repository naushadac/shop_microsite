import React from 'react';
import styled from 'styled-components';
import {LeftNavList} from '../../constants/constants'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
        li {
            padding: 18px 10px;
        }

        a {
            text-decoration: none;
            color: green;
    
        }
`;

const LeftNav = () => {
    return (
        <Ul>
            {LeftNavList.map((item, index) => {
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

export default LeftNav;