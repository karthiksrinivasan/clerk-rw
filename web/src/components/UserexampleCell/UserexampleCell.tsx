import type {
  GetUserExampleQuery,
  GetUserExampleQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query GetUserExampleQuery {
    userExamples {
      id
      name
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<GetUserExampleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userExamples,
}: CellSuccessProps<GetUserExampleQuery, GetUserExampleQueryVariables>) => {
  console.log('Data Loaded')
  return <div>{JSON.stringify(userExamples)}</div>
}
