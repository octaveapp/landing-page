import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from '../components/footer'
import './knacss.css'
import './layout.css'

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
            <html lang="en" />
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
