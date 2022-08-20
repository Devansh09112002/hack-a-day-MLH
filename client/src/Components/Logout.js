import React from 'react';
import styled from 'styled-components';
import { BiPowerOff } from 'react-icons/bi'
import axios from 'axios';

const Button = styled.button`
 display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }

  &:hover{
    transform: scale(1.1);
}

&:active{
    transform: scale(0.9);
  }
`;


const Logout = () => {
    
    axios.defaults.withCredentials = true;
    const handleClick = () => {
        axios
        .get('http://localhost:8000/logout')
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    window.location.reload();
    }

  return (
    <Button onClick={handleClick} >
    <BiPowerOff/>
    </Button>
  )
}

export default Logout