import { ButtonIcon } from "../components/ButtonIcon";
import { Card } from "../components/Card";
import { InputCheckbox } from "../components/InputCheckbox";
import { Text } from "../components/Text";
import TrashIcon from '../assets/icons/Trash.svg?react'
import Pencil from '../assets/icons/Pencil.svg?react'
import Close from '../assets/icons/Close.svg?react'
import Check from '../assets/icons/Check.svg?react'
import { useState } from "react";
import { InputText } from "../components/InputText";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import {useTask} from "../hooks/use-task";

interface TaskItemProps {
    task: Task;
}


export function TaskItem({task}: TaskItemProps){

    const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating);
    const [taskTitle, setTaskTitle] = useState(task.title || '')
    const {updateTask, updateTaskStatus, deleteTask} = useTask();

    function handleEditTask(){
        setIsEditing(true);
    }

    function handleExitEditTask(){

        if(task.state === TaskState.Creating){
            deleteTask(task.id)
        }

        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>){
        setTaskTitle(e.target.value)
    }

    function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log({id: task.id, title: taskTitle})
        updateTask(task.id, {title: taskTitle})
        setIsEditing(false)
    }

    function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>){
        const checked = e.target.checked;
        updateTaskStatus(task.id, checked)
    }

    function handleClickDeleteTask(){
        deleteTask(task.id)
    }

    return(

        <Card size='md' >
                {!isEditing ? 

                    (<div className="flex items-center gap-4">
                        <InputCheckbox checked={task?.concluded} onChange={handleChangeTaskStatus}/>
                        <Text className={cx("flex-1", {'line-through' : task.concluded})}>{task?.title}</Text>

                        <div className="flex gap-1">
                            <ButtonIcon  type="button" icon={TrashIcon} variant="tertiary" onClick={handleClickDeleteTask}/>
                            <ButtonIcon  type="button" icon={Pencil} variant='tertiary' onClick={handleEditTask}/>
                        </div>
                    
                    </div>)

                    :
                    <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                        <>
                            <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTitle}/>
                            <div className="flex gap-1">
                                <ButtonIcon type="button" icon={Close} variant="secondary" onClick={handleExitEditTask}/>
                                <ButtonIcon icon={Check} variant='primary' type="submit"/>
                            </div>                    
                        </>
                    </form>

                } 
        </Card>

    )
}