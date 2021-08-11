import tasksData, { ITask } from "../store/tasksData";


export interface IErrors{
    name?:string;
    type?:string;
    date?:string;
}

const validateFields = (values:ITask) =>{

    let errors:IErrors = {
       };

    if(!values.name){
        errors.name = 'Please, enter name!'
    }
    if(!values.type){
        errors.type = 'Please, enter type!'
    }
    if(!values.date){
        errors.date = 'Please, enter date!'
    }
    tasksData.tasksData.forEach(task=>{
        if ((task.name === values.name) && (task.id !== values.id)){
            errors.name = 'This task already exists'
        }
    })


    return errors;
}

export default validateFields;