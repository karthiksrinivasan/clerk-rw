import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String140513' } },
    two: { data: { email: 'String5514899' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
