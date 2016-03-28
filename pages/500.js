
import React, { Component, PropTypes } from 'react';

export default class ErrorPage extends Component {

  static propTypes = {
    error: PropTypes.instanceOf(Error),
  }

  render () {
    return (
      <article className='mw7 center'>
        <h1>Error 😞</h1>
        <pre className='code'>
          {this.props.error ?
            this.props.error.message + '\n\n' + this.props.error.stack
          : 'A critical error occurred.' }
        </pre>
      </article>
    )
  }

}
