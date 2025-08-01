import './App.css'
import { Text } from './components/Text'
import { Icon } from './components/Icon'
import TrashIcon from './assets/icons/Trash.svg?react'
import CheckIcon from './assets/icons/Check.svg?react'
import ClipIcon from './assets/icons/Clipboard.svg?react'
import CloseIcon from './assets/icons/Close.svg?react'
import PencilIcon from './assets/icons/Pencil.svg?react'
import PlusIcon from './assets/icons/Plus.svg?react'
import SpinnerIcon from './assets/icons/spinner.svg?react'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { ButtonIcon } from './components/ButtonIcon'
import { InputText } from './components/InputText'
import {InputCheckbox} from './components/InputCheckbox'
import { Card } from './components/Card'
import { Container } from './components/Container'
import { Skeleton } from './components/Skeleton'





export default function App() {

  return (
    <Container>
      <Text variant={'body-md-bold'}>Olá Pessoal</Text>
      <Icon svg={TrashIcon} className='fill-pink-base'/>

      <div className='flex gap-1'>
      <Badge variant={'primary'}>5</Badge>
      <Badge variant={'secondary'}>2 de 5</Badge>
      <Badge loading>01</Badge>
      </div>

      <Button icon={PlusIcon}>Nova Tarefa</Button>
      <div>
      <ButtonIcon icon={TrashIcon}/>
      <ButtonIcon icon={TrashIcon} variant={'secondary'}/>
      <ButtonIcon icon={TrashIcon} variant={'tertiary'}/>
      <ButtonIcon icon={TrashIcon} loading/>
      </div>
      <InputText/>
      <InputCheckbox/>
      <InputCheckbox loading/>
      <div>
        <Card size='md'>Olá Mundo</Card>
      </div>

      <div className='space-y-2'>
        <Skeleton className='h-6'/>
        <Skeleton/>
        <Skeleton className='w-40'/>
      </div>
    </Container>
  )
}

