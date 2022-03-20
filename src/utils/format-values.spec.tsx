import { formatBreadcrumbs } from './format-values'

const PATHS_WITH_SPACES = [
  'items',
  'search',
  'quero',
  '20algo',
  '20diferente'
]

const PATHS_WITHOUT_SPACES = [
  'items',
  'search',
  'ipod'
]

describe('formatBreadcrumbs:', () => {
  it('Should format path with spaces', () => {
    const breadscrumbs = formatBreadcrumbs(PATHS_WITH_SPACES)

    expect(breadscrumbs).toBe('items > search > quero > algo > diferente')
  })

  it('Should format path without spaces', () => {
    const breadscrumbs = formatBreadcrumbs(PATHS_WITHOUT_SPACES)

    expect(breadscrumbs).toBe('items > search > ipod')
  })
})
