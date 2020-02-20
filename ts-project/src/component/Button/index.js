import React from 'react'
import style from './style.module.css'

const e = React.createElement

const func = img => {
  if (img) {
    return e('img', { alt: 'lg', src: img, className: style.Img }, null)
  } else {
    return null
  }
}

export default class Button extends React.Component {
  render() {
    return e(
      'a',
      { className: style.Button, href: this.props.href },
      e(
        'div',
        { className: style.BlockIcon },
        func(this.props.img),
        this.props.name,
      ),
    )
  }
}
