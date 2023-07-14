import type { ComponentMeta } from '@storybook/react'

import UnauthorizedPage from './UnauthorizedPage'

export const generated = () => {
  return <UnauthorizedPage />
}

export default {
  title: 'Pages/UnauthorizedPage',
  component: UnauthorizedPage,
} as ComponentMeta<typeof UnauthorizedPage>
