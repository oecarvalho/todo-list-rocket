import { Button } from "../components/Button";
import PlusIcon from '../assets/icons/Plus.svg?react';
import { TaskItem } from "./TaskItem";
import useTasks from "../hooks/use-tasks";
import { useTask } from "../hooks/use-task";
import { TaskState } from "../models/task";

export function TaskList(){

    const {tasks} = useTasks();
    const {prepareTask} = useTask();

    function handleNewTask(){
        prepareTask();
    }
    
    return <>
        <section >
            <Button icon={PlusIcon} className="w-full" onClick={handleNewTask} disabled={tasks.some((task)=> task.state === TaskState.Creating)}>Nova Tarefa</Button>
        </section>

        <section className="space-y-2">
            {tasks.map((task) => <TaskItem key={task.id} task={task}/>)}
        </section>
    </>
}