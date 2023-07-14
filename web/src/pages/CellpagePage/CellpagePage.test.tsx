import { render } from '@redwoodjs/testing/web'

import CellpagePage from './CellpagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CellpagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CellpagePage />)
    }).not.toThrow()
  })
})
