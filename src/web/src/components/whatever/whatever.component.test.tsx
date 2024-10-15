import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Whatever from './whatever.component';

describe('Basic home page tests', () => {
    it('should include the correct H3 content', () => {
        const serverComponent = Whatever();
        const { getByRole } = render(serverComponent); // Credit:  https://www.reddit.com/r/nextjs/comments/17mc9hn/comment/k917k0z/
        const level1headerplaceholder = getByRole('heading', { level: 3, name: 'Okay' });
        expect(level1headerplaceholder).toBeDefined();
    });
});