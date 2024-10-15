import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyPage from './[[...path]].page'

test('Basic home page tests', () => {
    render(<MyPage />);
    const level1headerplaceholder = screen.getByRole('heading', { level: 1, name: 'Header goes here' });
    expect(level1headerplaceholder).toBeDefined();
})