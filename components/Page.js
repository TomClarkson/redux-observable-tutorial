import Head from 'next/head';

export default ({ children }) => (
  <div>
    <Head>
      <title>Tom's guide to RX</title>
      <link rel="stylesheet" href="/static/page.css"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="https://static.jsbin.com/js/embed.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/themes/prism.min.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/prism.min.js"></script>
    </Head>
    <div className="wrapper">
      <header>
        <img src="/static/i.t-logo.png" />
        <span>IMMUTABLETOM's GUIDE TO RX</span>  
      </header>
      
      <div className="page">
        { children }
      </div>
    </div>
  </div>
)