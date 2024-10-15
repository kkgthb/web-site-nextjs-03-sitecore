
## Install `node_modules` to your local computer

```powershell
npm install
```

## Build out runnable source code on your local computer

```powershell
npm run build
```

## Run the output as a web server on your local computer

```powershell
npm run start
```

## Notes

* [Inner `src` folder justification](https://www.reddit.com/r/nextjs/comments/14fd1kl/comment/jp5gamb/)
* [Vitest justification vs. Jest](https://www.reddit.com/r/reactjs/comments/10zyse3/is_jest_still_faster_than_vitest/)
* [Sitecore Next.js SDK documentation (Experience Platform)](https://doc.sitecore.com/xp/en/developers/hd/22/sitecore-headless-development/sitecore-javascript-rendering-sdk--jss--for-next-js.html)
* [Sitecore Next.js SDK ocumentation (XM Cloud)](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-javascript-rendering-sdk--jss--for-next-js.html)
* Routing:
    * If you name the primary file `index.page.tsx`, it only works when you visit `http://localhost/`, and not when you visit `http://localhost/something-else/`.
    * But if you rename it `[[...path]].page.tsx`, then any URL you visit will always return its same "hello world" content.
* `next/router`'s `useRouter().pathname` is just "`/[[...path]]`" even if I'm visiting `http://localhost/something-else/`.  That's pretty useless for me right now.
* The starter kit's boilerplate's `layoutData.sitecore.context.pageEditing` probably corresponds to the layout service API response JSON's `.sitecore.context.pageEditing` property.
    * This is good to know; it opens up a very big range of search terms I can now use for stalking other people's source code, since I have a few such JSON responses tucked away.
* Old-routing, server `useRouter()` contents when you visit `http://localhost/something-else/`:
        ```json
        {
            "route": "/[[...path]]",
            "pathname": "/[[...path]]",
            "query": {},
            "asPath": "/[[...path]]",
            "isFallback": false,
            "basePath": "",
            "isReady": false,
            "isPreview": false,
            "isLocaleDomain": false
        }
        ```
* Old-routing, hydrated `useRouter()` contents when you visit `http://localhost/something-else/`:
        ```json
        {
            "pathname": "/[[...path]]",
            "route": "/[[...path]]",
            "query": {},
            "asPath": "/[[...path]]",
            "components": {
                "/[[...path]]": {
                    "initial": true,
                    "props": {
                        "pageProps": {}
                    }
                },
                "/_app": {
                    "styleSheets": []
                }
            },
            "isFallback": false,
            "basePath": "",
            "isReady": false,
            "isPreview": false,
            "isLocaleDomain": false,
            "events": {}
        }
        ```
* New-routing:  If your  `/src/app/[[slug]]/page.tsx` file exports a function that returns a `React.JSX.Element`:
    * Next.js will attempt to pass it a value through your function's first remaining not-yet-given-a-value-by-name parameter that reads like this:
            ```json
            {
                "params": {
                    "slug": [
                        "something-else",
                        "entirely"
                    ]
                },
                "searchParams": {}
            }
            ```
    * Or, if you're on the home page rather than visiting `https://localhost/something-else/entirely/, it'll read like this:
            ```json
            {
                "params":{},
                "searchParams":{}
            }
            ```
    * Next.js will leave all remaining not-yet-given-a-value-by-name parameters `undefined`.
        * So `const MyPage = (myparams, andthat): React.JSX.Element => {...}` would have a non-null `myparams.params`, but a null `andthat` between the curly braces.
    * Re-study ES6 if you want to remember how all the destructuring-related subtleties would work.
        * As in [the docs' suggestion](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#typescript) to make your function's parameter-string signature something like `({ params }: { params: { slug: string } }): React.JSX.Element`.
    * [vitest IDE bug fix](https://github.com/vitest-dev/vitest/issues/4921#issuecomment-1888484277)
