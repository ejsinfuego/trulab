import React from 'react';
import { Helmet } from 'react-helmet';

class Head extends Helmet {

    render() {
        return (
          <div>
            <Helmet>
              <title>PSU Trulab</title>
              <meta name="description" content="Bored is me" />
              <meta property="og:url" content="URL_OF_YOUR_PAGE" />
              <meta property="og:type" content="for fun" />
              <meta property="og:title" content="PARSU Trulab Finder" />
              <meta property="og:description" content="Bored ako e haha" />
              <meta property="og:image" content="URL_OF_IMAGE_TO_BE_SHARED" />
              <link rel="apple-touch-icon" sizes="180x180" href="src/components/favicon/apple-touch-icon.png"></link>
              <link rel="icon" type="image/png" sizes="32x32" href="src/components/favicon/favicon-32x32.png"></link>
              <link rel="icon" type="image/png" sizes="16x16" href="src/components/favicon/favicon-16x16.png"></link>
              <link rel="manifest" href="src/components/favicon/site.webmanifest"></link>
            </Helmet>
              
              
          </div>
        );
      }

}

export default Head