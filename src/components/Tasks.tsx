import React, { useState } from "react";
import tasksData, { ITask } from "../store/tasksData";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import EditableTask from "./EditableTask";
import TaskReadOnly from "./TaskReadOnly";

const StyleHeader = styled.tr`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid black;
    box-sizing: bprder-box;
    background-color: #7ba3fb;

`

const StyledTable = styled.table`
width:90%;
margin:auto;
`

const Tasks: React.FC = observer( () =>{
    const [editableId, setEditableId] = useState(-1)

    function handleEditId(task:ITask){
        setEditableId(task.id);
    }

 return(
     <StyledTable>
        <thead>
            <StyleHeader>
                <td>id </td>
                <td>Name</td>
                <td>Type</td>
                <td>Description</td>
                <td>Date</td>
                <td>Edit</td>
                <td>Delete</td>
            </StyleHeader>
        </thead>
        {tasksData.tasksData.map((task,index) =>{
            return(
                <tbody key={index}>
                { editableId === task.id ? (<EditableTask  index={index} task={task}  setHookId ={()=>setEditableId(-1)}/>): (<TaskReadOnly  index = {index} task={task} handleEditId= {()=>handleEditId(task)} /> )}
                </tbody>
            )
        })}
     </StyledTable>
     
 )
}
)
export default Tasks;