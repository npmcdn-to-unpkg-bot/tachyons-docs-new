
import React, { Component } from 'react'

export default class Principles extends Component {
  render() {
    return (
      <article className='ph3 ph5-ns tl tl-ns bt b--light-gray pv3 pv5-ns' id='priciples'>
        <h1>Principles</h1>
        <section className='lh-copy'>
          <div className='cf'>
            <article className='pv2 fl w-100 w-50-ns pr0 pr2-ns'>
              <h2 className='f4 f3-ns fw6 mb0'>Responsive</h2>
              <p className='f5 measure lh-copy mt0'>
                Everything should be 100% responsive. Your website should work regardless of a users
                device or screensize. Don't break the functionality of HTML with CSS.
              </p>
            </article>
            <article className='pv2 fl w-100 w-50-ns pl0 pl2-ns'>
              <h2 className='f4 f3-ns fw6 mb0'>Readable</h2>
              <p className='f5 measure lh-copy mt0'>
                No matter the lighting, or the device, font-sizes should be
                large enough and contrast should be high enough.
              </p>
            </article>
          </div>
          <div className='cf'>
            <article className='pv2 fl w-100 w-50-ns pr0 pr2-ns'>
              <h2 className='f4 f3-ns fw6 mb0'>Performant</h2>
              <p className='f5 measure lh-copy mt0'>
                Code isn't for making a developers life easier. It's for
                improving the lives of our users. If it's not doing that, why
                write it. A developer's time is not precious. A user's time is.
                Code should be optimized for performance.
              </p>
            </article>
            <article className='pv2 fl w-100 w-50-ns pl0 pl2-ns'>
              <h2 className='f4 f3-ns fw6 mb0'>
                Modular
              </h2>
              <p className='f5 measure lh-copy mt0'>
                Modules &gt; Monoliths
                Tachyons isn't a monolithic framework. It's a collection of self contained modules
                that can be mixed and matched or used independently. Use what you want, leave what you don't.
              </p>
            </article>
          </div>
          <div className='cf'>
            <article className='pv2 fl w-100 w-50-ns pr0 pr2-ns'>
              <h2 className='f4 f3-ns fw6 mb0'>
                Reusable
              </h2>
              <p className='f5 measure lh-copy mt0'>
                Doing one thing well, promotes reusability and reduces redundancy in a codebase.
              </p>
            </article>
            <article className='pv2 fl w-100 w-50-ns pl0 pl2-ns'>
              <h2 className='f4 f3-ns fw6 mb0'>Easy</h2>
              <p className='f5 measure lh-copy mt0'>
                Designing in the browser should be easy.
                If a computer can do it, you shouldn't have to.
              </p>
            </article>
          </div>
        </section>
      </article>
    )
  }
}
