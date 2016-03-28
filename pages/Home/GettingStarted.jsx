
import React, { Component } from 'react'

export default class GettingStarted extends Component {
  render() {
    return (
      <article className='ph3 ph5-ns mb4 mb5-ns' id='getting-started'>
        <h1>Getting Started</h1>
        <p className='measure lh-copy'>
          Copy the line of code below and paste it in the head of the html file(s) you want to include tachyons in.
        </p>
        <pre className='pre black-70' style={{overflow: 'auto'}}><code className='code dib pa2 bg-near-white' style={{fontSize: 14}}>&lt;link rel='stylesheet' href='https://npmcdn.com/tachyons@4.0.0-beta.12/css/tachyons.min.css'&gt;</code></pre>
        <p className='mt4'><b>or</b> install via npm</p>
        <pre className='pre black-70' style={{overflow: 'auto'}}><code className='code dib pa2 bg-near-white' style={{fontSize: 14}}>npm install --save-dev tachyons@4.0.0-beta.12</code></pre>
        <p className='mt4'><b>or</b> grab all the source files and build+develop locally</p>
        <pre className='pre black-70' style={{overflow: 'auto'}}><code className='code dib pa2 bg-near-white' style={{fontSize: 14}}>git clone git@github.com:tachyons-css/tachyons.git
cd tachyons
npm install &amp;&amp; npm build</code></pre>
      </article>
    )
  }
}
