import type { ComponentMeta } from '@storybook/react'

import CellpagePage from './CellpagePage'

export const generated = () => {
  return <CellpagePage />
}

export default {
  title: 'Pages/CellpagePage',
  component: CellpagePage,
} as ComponentMeta<typeof CellpagePage>
