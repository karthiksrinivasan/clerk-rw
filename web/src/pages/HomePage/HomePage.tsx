import { useLazyQuery } from '@apollo/client'

export const QUERY = gql`
  query GetUserExampleQuery {
    userExamples {
      id
      name
      email
    }
  }
`

const HomePage = () => {
  const [loadData, { data, loading }] = useLazyQuery(QUERY, {
    onCompleted: (data) => {
      console.log('Data Loaded')
      setUserExamples(data.userExamples)
    },
  })
  const [userExamples, setUserExamples] = React.useState([])

  React.useEffect(() => {
    loadData()
  }, [])

  console.log(data)

  return loading ? (
    <></>
  ) : (
    <>
      {userExamples.map((userExample) => (
        <div key={userExample.id}>
          <h2>
            <p>{userExample.name}</p>
          </h2>
          <p>{userExample.email}</p>
        </div>
      ))}
    </>
  )
}

export default HomePage
