// @flow

import {
  add,
  addAsync,
} from '../add'

describe('add', () => {
  it('add', () => {
    expect(add(1, 1)).toEqual(2)
  })

  it('add async', async () => {
    const result = await addAsync(1, 1)
    expect(result).toEqual(2)
  })
})
