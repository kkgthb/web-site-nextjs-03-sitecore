import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './index'

test('Basic home page tests', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1, name: 'Header goes here' })).toBeDefined()
})