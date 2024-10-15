// Credit:  https://kentcdodds.com/blog/how-to-test-custom-react-hooks via https://www.reddit.com/r/react/comments/1d3ukbc/comment/l6a9g4a/

import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useFormattedDate from './get-hydration-friendly-datestamp';

describe('Date stamp utility', () => {
    const rawNow = Date.now()
    const stringifiedNow = new Date(rawNow).toLocaleString("en-US");

    it('should be a string showing the current date and time', () => {
        const { result } = renderHook(() => useFormattedDate(rawNow));
        expect(result.current).toEqual(stringifiedNow);
    });
});