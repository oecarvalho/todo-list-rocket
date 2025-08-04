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


export function TaskItem(){

    const[isEditing, setIsEditing] = useState(false);

    function handleEditTask(){
        setIsEditing(true);
    }

    function handleExitEditTask(){
        setIsEditing(false)
    }

    return(

        <Card size='md' className="flex items-center gap-4">
            {!isEditing ? 

                (<>
                    <InputCheckbox/>
                    <Text className="flex-1">Fazer Compras da Semana</Text>

                    <div className="flex gap-1">
                        <ButtonIcon icon={TrashIcon} variant="tertiary"/>
                        <ButtonIcon icon={Pencil} variant='tertiary' onClick={handleEditTask}/>
                    </div>
                
                </>)

                :

                <>
                    <InputText className="flex-1"/>
                    <div className="flex gap-1">
                        <ButtonIcon icon={Close} variant="secondary" onClick={handleExitEditTask}/>
                        <ButtonIcon icon={Check} variant='primary'/>
                    </div>                    
                </>
            } 
        </Card>
    )
}