
import React, { Component, PropTypes } from 'react'
import GoogleAnalytics from './GoogleAnalytics.jsx'
import { title, description } from '../config'

export default class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string.isRequired,
    debug: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <title>{this.props.title || title}</title>
          <meta name='description' content={this.props.description || description} />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='apple-touch-icon' href='apple-touch-icon.png' />
          <link rel='stylesheet' href='//npmcdn.com/tachyons@4.0.0-beta.16/css/tachyons.min.css' />
          <style>{'.blue { color: #0074D9; } .bg-blue { background-color: #0074D9; }'}</style>
          <script src={'/app.js?' + new Date().getTime()}></script>
        </head>
        <body className='sans-serif'>
          <div id='app' dangerouslySetInnerHTML={{__html: this.props.body}} />
          <GoogleAnalytics />
        </body>
      </html>
    )
  }

}
