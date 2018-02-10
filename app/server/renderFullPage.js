export default function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html lang="en">
        <head>
            <title> Eavesjob </title>
        </head>
        <body style="display:none">
            <div id="root">${html}</div>
            <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script type="text/javascript" src="/vendor.bundle.js"></script>
            <script type="text/javascript" src="/app.bundle.js"></script>
            <script type="text/javascript" src="/style.bundle.js"></script>
        </body>
        </html>
    `
}
