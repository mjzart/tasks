import { ITask } from "../store/tasksData";

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
    return errors;
}

export default validateFields;