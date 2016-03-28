
import React, { Component } from 'react'
import _ from 'lodash'
import Wrap from './Wrap.jsx'

const data = [
  {
    'body': 'After I embraced the “lots of little classes” way of styling, my anger at CSS almost completely went away and I was much more easily able to style and modify a design … you really have to try it.',
    'author': 'Dave Copeland - Software Engineer',
    'id': 1
  },
  {
    'body': 'It turns out composing utilities together like that is a really nice way to style things. Adam Morse has taken this to its logical conclusion with Tachyons …',
    'author': 'Ben Smithett - Developer',
    'id': 2
  },
  {
    'body': 'It seems silly at first to write code that looks like inline HTML styling but Tachyons works. Instead of wasting time hunting down and dealing with CSS overrides, I now spend time iterating on the design... which is what we’re supposed to be doing in the first place :)',
    'author': 'Jason Li - Illustrator & Designer',
    'id': 3
  },
  {
    'body': 'I’ve found extremely low-level “frameworks” like BassCSS and Tachyons useful recently. They let you do the whole “just add and remove classes to create elements” thing but also don’t lock you into the constraints and issues of higher level frameworks like Bootstrap.',
    'author': 'Cole Peters - Designer',
    'id': 4
  },
  {
    'body': 'CSS frameworks shouldn’t be one-size-fits-all. Tachyons nails it with its modular approach, eliminating bloat from day one.',
    'author': 'Philip Ardeljan - Designer',
    'id': 5
  },
  {
    'body': 'Tachyons nails everything you need from a CSS framework. Development goes faster, designs are more consistent, and best of all, it’s a ton of fun to play with.',
    'author': 'Lachlan Campbell - Designer / Developer',
    'id': 6
  },
  {
    'body': 'I never understood how people did font ratios and table layouts nicely with CSS until @mrmrs showed me the light.',
    'author': 'Nat Welch - Software Engineer',
    'id': 7
  },
  {
    'body': 'Tachyons enabled the aboutLife team to more easily reason about, debug, and change visual styles all while thinking _less_ about CSS. We’re able to achieve our desired designs more quickly than ever before.',
    'author': 'Parsha Pourkhomami - Software Engineer',
    'id': 8
  }
]

export default class Testimonals extends Component {
  render() {
    return (
      <article className='ph3 ph5-ns tl tl-ns bt b--light-gray pv3 pv5-ns' id='testimonals'>
        <h1>Testimonals</h1>
        <Wrap data={data} />
      </article>
    )
  }
}
