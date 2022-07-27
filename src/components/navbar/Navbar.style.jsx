import { HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Navbar = styled.div `
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    position: fixed;
    padding: 10px 12px;
    transition: 0.6;
    width: ${ props => props.toogle ? '75px':'240px' };
`