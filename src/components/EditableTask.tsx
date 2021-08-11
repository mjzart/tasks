import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import styled from "styled-components";
import tasksData , { ITask } from "../store/tasksData";
import ErrorMassege from "./ErrorMassege";
import ModalConfirmDelete from "./ModalConfirmDelete";
import validateFields, { IErrors } from "./validateFields";


const StyledInput = styled.input`
    font-size: .875rem;
    border-radius: .2rem;
    background-color: #fff;
    border: 1px solid #ced4da;
    width:90%;
    height: 25px;
    &::-webkit-calendar-picker-indicator {
        opacity:0;
        position: absolute;
        width: 10%;
      }
`

const StyledSelect = styled.select`
    font-size: .875rem;
    border-radius: .2rem;
    background-color: #fff;
    border: 1px solid #ced4da;
    width:90%;
    height: 29px;
`

const StyleEditedTask = styled.tr`
    
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid black;
    height:40px;
    width:100%;
    background-color: #c7d8ff;
    align-items:center;

`

const StyledSaveButton = styled.button`
    color: #000;
    background-color: #ffc107;
    border-color: #ffc107;
    border-radius: .25rem;
    margin 5px;
    height: 25px;
    &:hover{
        background-color: #ffca2c;
        border-color: #ffc720;
    }
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

interface IEditableTaskProps{
    index: number;
    task: ITask;
    setHookId:()=>void;
}

const EditableTask = observer( ({task,index,setHookId}:IEditableTaskProps)=>{
    const [changeTask, setChangeTask] = useState(task)

    const [errors, setErrors] =useState<IErrors>({})

    function handleSave(event:React.MouseEvent<HTMLButtonElement>){
        event.preventDefault()
        const errorsField = validateFields(changeTask)
        setErrors(errorsField)

        if (!Object.keys(errorsField).length){
            tasksData.changeTaskData(task.id, changeTask)
            setHookId(); 
        }

        
    }

    function handleChangedValue(event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        const cValue= event.target.value;
        setChangeTask((prev) =>{
            return{
                ...prev,
                [event.target.name]:cValue,
            }
        })
    }


    return (
        <StyleEditedTask >
            <td>{index+1}</td>
            <td>
                <StyledInput 
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    value={changeTask.name}  
                    onChange={handleChangedValue}
                />
                {errors.name ?  <ErrorMassege errorText={errors.name}/> : null}
            </td>
            <td>
                <StyledSelect 
                    name="type" 
                    value={changeTask.type} 
                    onChange={handleChangedValue}
                    
                >
                    <option value="" disabled>Choose an option</option>
                    <option>new</option>
                    <option>in-progress</option>
                    <option>done</option>
                </StyledSelect>
                {errors.type ?  <ErrorMassege errorText={errors.type}/> : null}
            </td>
            <td>
                <StyledInput 
                    type="text" 
                    name="description" 
                    id="EditDescription" 
                    placeholder='Description' 
                    value={changeTask.description} 
                    onChange={handleChangedValue}
                    
                />
            </td>
            <td>
                <StyledInput 
                    type="date" 
                    name="date" 
                    id="date" 
                    value={changeTask.date} 
                    onChange={handleChangedValue}
                    
                />
                {errors.date ?  <ErrorMassege errorText={errors.date}/> : null}
            </td>
            <td><StyledSaveButton type='submit' onClick={handleSave} >Save</StyledSaveButton></td>
            <td>
                { task.modal ? <ModalConfirmDelete toggleDel = {()=>tasksData.removeTask(task.id)} toggleClose={()=>{tasksData.showModal(task.id)}}/> : <StyledDeleteButton onClick = {()=>{tasksData.showModal(task.id)}}>Delete</StyledDeleteButton> }
            </td>
        </StyleEditedTask>
    )
}
)
export default EditableTask;

