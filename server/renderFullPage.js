export default function renderFullPage(html) {
    return `
        <!doctype html>
        <html lang="en">
        <head>
            <title> Eavesjob </title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            </script>

            <script type="text/javascript" src="/build/vendor.bundle.js"></script>
            <script type="text/javascript" src="/build/app.bundle.js"></script>
            <script type="text/javascript" src="/build/react.bundle.js"></script>
        </body>
        </html>
    `
}
