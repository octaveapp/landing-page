import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'
import './commons/styles/knacss.css'
import './commons/styles/layout.css'
import './commons/styles/octave-font.css'

const Layout = ({
  children,
  title,
  description,
  keywords,
  hideCallToAction,
}) => (
  <>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
      ]}
    >
      <base href={process.env.BASE_URL} />
      <html lang="fr" />
      {process.env.NODE_ENV === 'production' && hotJarAndGoogleAnalyticsTags()}
    </Helmet>
    <Header siteTitle={title} hideCallToAction={hideCallToAction} />
    {children}
    <Footer />
  </>
)

function hotJarAndGoogleAnalyticsTags() {
  let i = 0
  return [
    <script
      key={i++}
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-126067793-2"
    />,
    <script key={i++}>
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-126067793-2');`}
    </script>,
    <script key={i++}>
      {`
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:1096949,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `}
    </script>,
  ]
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  hideCallToAction: PropTypes.boolean.isRequired,
}

export default Layout
