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






export default function App() {

  return (
    <>
      <Text variant={'body-md-bold'}>Olá Pessoal</Text>
      <Icon svg={TrashIcon} className='fill-pink-base'/>
      <Badge variant={'primary'}>5</Badge>
      <Badge variant={'secondary'}>2 de 5</Badge>
    </>
  )
}

