import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import MyPage from './page';
import { BuiltInPageProps } from '../../myutils/ordinary-page-props';

describe('Basic home page tests', () => {
    const sampleProps: BuiltInPageProps = { "params": { "slug": ['just', 'testing'] }, "searchParams": {} };
    const thePageServerComponent = MyPage(sampleProps);
    const { getByRole, getByTestId } = render(thePageServerComponent); // Credit:  https://www.reddit.com/r/nextjs/comments/17mc9hn/comment/k917k0z/
    it('should include the correct H1 content', () => {
        const level1headerplaceholder: HTMLElement = getByRole('heading', { level: 1, name: 'Header goes here' });
        expect(level1headerplaceholder).toBeDefined();
    });
    it('should include a child Whatever', () => {
        const whateverh3: HTMLElement = getByTestId('whatever-h3');
        expect(whateverh3).toBeDefined();
    });
});