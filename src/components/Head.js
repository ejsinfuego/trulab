import { Helmet } from 'react-helmet';

class Head extends Helmet {

    render() {
        return (
          <div>
            <Helmet>
              <title>PSU Trulab</title>
              <meta name="description" content="Your page description" />
              <meta property="og:url" content="URL_OF_YOUR_PAGE" />
              <meta property="og:type" content="for fun" />
              <meta property="og:title" content="PARSU Trulab Finder" />
              <meta property="og:description" content="Bored ako e haha" />
              <meta property="og:image" content="URL_OF_IMAGE_TO_BE_SHARED" />
            </Helmet>
              
          </div>
        );
      }

}

export default Head