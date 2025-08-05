import useLocalStorage from "use-local-storage";
import { TASK_KEY, TaskState, type Task } from "../models/task";

export default function useTasks(){
    const [tasks] = useLocalStorage<Task[]>(TASK_KEY, [])

    return{
        tasks,
        taskCount: tasks.filter((task)=> task.state === TaskState.Created).length,
        concludeTasksCount: tasks.filter((tasks) => tasks.concluded).length
    }
}