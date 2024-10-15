
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
