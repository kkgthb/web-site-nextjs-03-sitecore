import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyPage from './[[...path]].page'

describe('Basic home page tests', () => {
    it('should include the correct H1 content', () => {
        render(<MyPage />);
        const level1headerplaceholder = screen.getByRole('heading', { level: 1, name: 'Header goes here' });
        expect(level1headerplaceholder).toBeDefined();
    });
});