
import React, { Component } from 'react'
import GithubButtons from '../../components/GithubButtons.jsx'

export default class Hero extends Component {
  render() {
    return (
      <article className='pa3 ph5-ns' id='intro'>
        <GithubButtons />
        <h1 className='f3 f2-ns mt2 fw6 lh-title measure'>
          Tachyons was built for designing.
        </h1>
        <p className='f5 f4-ns fw5 measure lh-copy'>Create fast loading, highly readable, and
          100% responsive interfaces with as little css as possible.</p>
        <p className='measure f5 f4-ns lh-copy'>
          Modules can be altered, extended, or changed to meet your design needs.
          You shouldn't need to write css everytime you want to build a new
          ui component. By learning the composable building blocks in tachyons, you
          can quickly start to build out interfaces while writing little to no css.
        </p>
      </article>
    )
  }
}
