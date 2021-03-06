import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Head = ({dir, lang}) => {
    return (
        <HelmetProvider>
        <div className="application">
            <Helmet htmlAttributes={{ dir }}>
                <meta charSet="utf-8" />
                <title>Home</title>
                { lang === 'en' ? 
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
                : 
                <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css" integrity="sha384-JvExCACAZcHNJEc7156QaHXTnQL3hQBixvj5RV5buE7vgnNEzzskDtx9NQ4p6BJe" crossorigin="anonymous" />
                }
            </Helmet>
      </div>
      </HelmetProvider>
    )
}

export default Head
