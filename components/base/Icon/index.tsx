import { memo } from 'react'

import Ether from 'assets/ether.svg'
import Trash from 'assets/trash.svg'



const icons = {
  trash: Trash,
  ether: Ether
}

export type IconNames = keyof typeof icons

interface IconProps {
  name: IconNames
}

function BaseIcon ({ name }: IconProps) {
  const Icon = icons[name]
  return <Icon />
}

export const Icon = memo(BaseIcon)