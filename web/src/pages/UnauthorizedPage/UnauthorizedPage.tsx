import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  useOrganizationList,
} from '@clerk/clerk-react'

import { Redirect, routes } from '@redwoodjs/router'

const UnauthorizedPage = () => {
  const redirectUrl = new URLSearchParams(window.location.search).get(
    'redirectTo'
  )

  return (
    <>
      <SignedOut>
        <RedirectToSignIn redirectUrl={redirectUrl} />
      </SignedOut>
      <SignedIn>
        <Redirect to={routes.home()} />
      </SignedIn>
    </>
  )
}

export default UnauthorizedPage
