import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <p><small>Powered by <a href='https://www.gatsbyjs.org' rel='nofollow'>Gatsby</a> | <a href='https://kruzyk.github.io'>Jacek Krużycki</a></small></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
