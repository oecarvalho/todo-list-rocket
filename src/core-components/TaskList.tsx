import { Button } from "../components/Button";
import PlusIcon from '../assets/icons/Plus.svg?react';
import { TaskItem } from "./TaskItem";


export function TaskList(){
    return <>
        <section >
            <Button icon={PlusIcon} className="w-full">Nova Tarefa</Button>
        </section>

        <section className="space-y-2">
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </section>
    </>
}