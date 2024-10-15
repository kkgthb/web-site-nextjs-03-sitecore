import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyPage from './page';
import { BuiltInProps } from '../../myutils/ordinary-page-props';

describe('Basic home page tests', () => {
    it('should include the correct H1 content', () => {
        const sampleProps: BuiltInProps = { "params": { "slug": ['just', 'testing'] }, "searchParams": {} };
        const serverComponent = MyPage(sampleProps);
        const { getByRole } = render(serverComponent); // Credit:  https://www.reddit.com/r/nextjs/comments/17mc9hn/comment/k917k0z/
        const level1headerplaceholder = getByRole('heading', { level: 1, name: 'Header goes here' });
        expect(level1headerplaceholder).toBeDefined();
    });
});