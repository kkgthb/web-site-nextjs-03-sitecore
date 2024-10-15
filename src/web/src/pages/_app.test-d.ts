import { test, assertType } from 'vitest';
import defaultExport from './_app';

test('_app TypeScript type is a JSX.Element', () => {
    const xyzzy: React.JSX.Element = defaultExport({ Component: '/', pageProps: null});
    assertType<React.JSX.Element>(xyzzy);
})