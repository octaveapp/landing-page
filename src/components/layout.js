import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from '../components/footer'
import '../components/commons/styles/knacss.css'
import '../components/commons/styles/layout.css'
import '../components/commons/styles/octave-font.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => {
      const { title, description, keywords } = data.site.siteMetadata
      return (
        <>
          <Helmet
            title={title}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
            ]}
          >
            <html lang="fr" />
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
            />
            <script>
              {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-126067793');`}
            </script>
            <base href={process.env.BASE_URL} />
          </Helmet>
          <Header siteTitle={title} />
          {children}
          <Footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
