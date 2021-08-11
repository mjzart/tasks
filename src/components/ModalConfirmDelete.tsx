import React from "react";
import styled from 'styled-components'

interface IProps{
    toggleDel: ()=>void;
    toggleClose: ()=>void;
}


const StyledModal = styled.div`
background-color: #7aa3fa;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: .7rem;
heigth: 100%;
`

const StyledText = styled.p`
margin:1px;
color:#fff;
`

const StyledDeleteButton = styled.button`
color: #fff;
background-color: #dc3545;
border-color: #dc3545;
border-radius: .25rem;
font-size: .7rem;
margin:1px;
&:hover{
    background-color: #bb2d3b;
    border-color: #b02a37;
    color:#fff;
}
`
const StyledCanselButton = styled.button`
color: #000;
font-size: .7rem;
margin:1px;
background-color: #fff;
border-color: #fff;
border-radius: .25rem;
&:hover{
    background-color: #d8d2d2;
    border-color: #d8d2d2;
    color:#000;
}
`

const ModalConfirmDelete = (props:IProps)=>{
    return(
        <StyledModal>
            <StyledText>Want to delete?</StyledText>
            <div>
                <StyledDeleteButton onClick={()=>{props.toggleDel()}}>Delete</StyledDeleteButton>
                <StyledCanselButton onClick={()=>{props.toggleClose()}}>Cancel</StyledCanselButton>
            </div>
        </StyledModal>
    )
}

export default ModalConfirmDelete;