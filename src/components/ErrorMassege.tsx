import React from "react";
import styled from "styled-components";

const StyledAlert = styled.div`
    text-align:center;
    justify-content: center;
    display: flex;
    width:100%;
    position: relative;
`

const StyledBody = styled.div`
    width:100%;
    
    background-color: #f3a0a8;
    border: 1px solid #b02a37;
    margin: 0;
    border-radius: .25rem;  
    font-size: .5rem;
    position: absolute;
`
interface IErrorText{
    errorText: string;
}

const ErrorMassege = ({errorText}:IErrorText) =>{
    

    return (
    <StyledAlert>
        <StyledBody>{errorText}</StyledBody>
    </StyledAlert>)
}

export default ErrorMassege;