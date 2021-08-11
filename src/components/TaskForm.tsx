import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import tasksData from '../store/tasksData'
import styled from "styled-components";
import validateFields, { IErrors } from "./validateFields";
import ErrorMassege from "./ErrorMassege";


const StyledDiv = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
`

const StyledInput = styled.input`
    padding: .25rem .5rem;
    font-size: .875rem;
    border-radius: .2rem;
    background-color: #fff;
    border: 1px solid #ced4da;
    width:90%;
    height: 25px;
`

const StyledSelect = styled.select`
    padding: .25rem .5rem;
    font-size: .875rem;
    border-radius: .2rem;
    background-color: #fff;
    border: 1px solid #ced4da;
    width:90%;
    height: 35px;
`

const StyledForm = styled.form`
    width: 90%;
    box-sizing:border-box;
    justify-content:center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #dee2e6;
    border-radius: .25rem;

`

const StyledCreateButton = styled.button`
    color: #fff;
    background-color: #198754;
    border-color: #198754;
    border-radius: .25rem;
    margin 5px;
    width:100%;
    height: 35px;
    &:hover{
        background-color: #157347;
        border-color: #146c43;
    }
`

const TaskForm: React.FC = observer( () =>{
    const [task, setTask] = useState({
        id: Date.now(),
        name :'',
        type: '',
        description: '',
        date: '',
        modal: false,
    });


    const [errors, setErrors] =useState<IErrors>({})

    

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setTask(prev=>{
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const errorsField = validateFields(task)
        setErrors(errorsField)
        
        
        if (!Object.keys(errorsField).length){
            tasksData.addTask(task);
            setTask({
                id: Date.now(),
                name :'',
                type: '',
                description: '',
                date: '',
                modal: false,
            })
            
        }
        
        
    }


    return(
        <StyledForm onSubmit = {handleSubmit} >
            <StyledDiv>
                <StyledInput 
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    value={task.name} 
                    onChange={handleChange} 
                    
                    
                />
                {errors.name ?  <ErrorMassege errorText={errors.name}/> : null}
            </StyledDiv>
            <StyledDiv>
                <StyledSelect 
                    name="type" 
                    value={task.type} 
                    onChange={handleChange}>
                    <option value="" disabled>Choose an option</option>
                    <option>new</option>
                    <option>in-progress</option>
                    <option>done</option>
                </StyledSelect>
                {errors.type && <ErrorMassege errorText={errors.type}/>}
            </StyledDiv>
            <StyledDiv>
                <StyledInput 
                    type="text" 
                    name="description" 
                    value={task.description} 
                    id="description" 
                    placeholder='Description' 
                    onChange={handleChange} 
                    
                />
            </StyledDiv>
            <StyledDiv>
                <StyledInput 
                    type="date" 
                    name="date" 
                    id="date" 
                    value={task.date} 
                    onChange={handleChange}  
                />
            {errors.date && <ErrorMassege errorText={errors.date}/>}
            </StyledDiv>
            <StyledDiv>
            <StyledCreateButton type='submit'>Create</StyledCreateButton>
            </StyledDiv>
        </StyledForm>
    
    )
}
)
export default TaskForm;