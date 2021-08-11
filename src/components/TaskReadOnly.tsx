import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import tasksData, { ITask } from "../store/tasksData";
import ModalConfirmDelete from "./ModalConfirmDelete";

const StyleTask = styled.tr`
    display: grid;
    width:100%;
    height:40px;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid black;
    align-items:center;
    background-color: #c7d8ff;

`

const StyledDeleteButton = styled.button`
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    border-radius: .25rem;
    margin 5px;
    height: 25px;
    &:hover{
        background-color: #bb2d3b;
        border-color: #b02a37;
        color:#fff;
    }
`
const StyledEditButton = styled.button`
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    border-radius: .25rem;
    margin 5px;
    height: 25px;
    &:hover{
        color: #fff;
        background-color: #5c636a;
        border-color: #565e64;
    }
`
interface ITaskReadOnlyProps {
    index: number;
    task:ITask;
    handleEditId: ()=>void;
}



const TaskReadOnly = observer( ({index,task, handleEditId}:ITaskReadOnlyProps)=>{
    return(
            <StyleTask >
                    <td>{index+1}</td>
                    <td>{task.name}</td>
                    <td>{task.type}</td>
                    <td>{task.description}</td>
                    <td>{task.date}</td>
                    <td><StyledEditButton onClick={handleEditId}>Edit</StyledEditButton></td>
                    <td>
                        { task.modal ? <ModalConfirmDelete toggleDel = {()=>tasksData.removeTask(task.id)} toggleClose={()=>{tasksData.showModal(task.id)}}/> : <StyledDeleteButton onClick = {()=>{tasksData.showModal(task.id)}}>Delete</StyledDeleteButton> }
                    </td>
            </StyleTask>
    )
}
)
export default TaskReadOnly;