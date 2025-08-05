import { Badge } from "../components/Badge"
import { Text } from "../components/Text"
import useTasks from "../hooks/use-tasks"


export function TaskSummary(){

    const {taskCount, concludeTasksCount} = useTasks()

    return <>
        <div className="flex items-center gap-2">
            <Text variant='body-sm-bold' className="!text-gray-300">Tarefas Criadas</Text>
            <Badge variant='secondary'>{taskCount}</Badge>
        </div>

        <div className="flex items-center gap-2">
            <Text variant='body-sm-bold' className="!text-gray-300">Concluídas</Text>
            <Badge variant='primary'>{concludeTasksCount} de {taskCount}</Badge>
        </div>
    </>
}