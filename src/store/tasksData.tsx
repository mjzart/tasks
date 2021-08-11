import { makeAutoObservable } from "mobx";

export interface ITask{
    id: number;
    name :string;
    type: string;
    description: string;
    date: string;
    modal:boolean;
}

class TasksData {
    tasksData: Array<ITask> = [{
        id: 0,
        name :"first",
        type: 'new',
        description: 'string',
        date: '2021-08-09', 
        modal: false,
    }]

    constructor(){
        makeAutoObservable(this);
    }

    addTask(task:ITask){
        this.tasksData.push(task)
    }

    removeTask(id:number){
        this.tasksData = this.tasksData.filter(task => task.id !== id)
    }
    
    showModal(id:number){
        this.tasksData.map(task => {
            if (task.id === id){
                task.modal = !task.modal
            }
            return task
        })
    }

    changeTaskData(id:number , newValue:ITask){
        this.tasksData.map(task => {
            if (task.id === id){
                task.name = newValue.name
                task.type = newValue.type
                task.description = newValue.description
                task.date = newValue.date
            }
            return task
        })
    }

}


export default new TasksData();