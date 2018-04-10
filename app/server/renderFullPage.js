export default function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html lang="en">
        <head>
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-100002995-2"></script>
          <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-100002995-2');
          </script>
          <!-- End of Google Analytics -->

          <!-- General Website Info -->
          <title> Eavesjob </title>
          <link rel="shortcut icon" href="#" type="image/x-icon">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta charset="utf-8">
          <meta name="author" content="Daan Schouten">
          <meta name="description" content="Checking for new vacancies can be a hassle. With Eavesjob, you only need to indicate which companies you're interested in. When job opportunities appear, we'll send you an email.">
          <!-- End of General Website Info -->

          <!-- Facebook Meta Tags -->
          <meta property="og:image" content="">
          <meta property="og:description" content="Checking for new vacancies can be a hassle. With Eavesjob, you only need to indicate which companies you're interested in. When job opportunities appear, we'll send you an email.">
          <meta property="og:title" content="Eavesjob">
          <!-- End of Facebook Meta Tags -->

          <!-- Twitter Meta Tags -->
          <meta name="twitter:image" content="">
          <meta name="twitter:title" content="Eavesjob">
          <meta name="twitter:site" content="@schouten_daan">
          <meta name="twitter:description" content="Checking for new vacancies can be a hassle. With Eavesjob, you only need to indicate which companies you're interested in. When job opportunities appear, we'll send you an email.">
          <!-- End of Twitter Meta Tags -->

        </head>
        <body style="display:none">
            <div id="root">${html}</div>
            <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script type="application/json" src="/vendor.bundle.js"></script>
            <script type="application/json" src="/app.bundle.js"></script>
            <script type="application/json" src="/style.bundle.js"></script>
        </body>
        </html>
    `
}
