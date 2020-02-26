import React from 'react'
import Buttons from '../../Button'
import style from './style.module.css'
import search from '../../../img/pn.png'
import map from '../../../img/hotpng.png'
import news from '../../../img/Google_News_icon.png'
import gmail from '../../../img/gmail.png'
import drive from '../../../img/drive.png'
import cal from '../../../img/cal.png'
import trans from '../../../img/trans.png'

const e = React.createElement
const arr = [
  {
    name: 'Поиск',
    href: 'https://www.google.com.ua/webhp?tab=ww1',
    src: search,
    id: 'search',
  },
  {
    name: 'Карты',
    href: 'https://maps.google.com.ua/maps?hl=ru&tab=wl1',
    src: map,
    id: 'map',
  },
  {
    name: 'Новости',
    href: 'https://news.google.com.ua/nwshp?hl=ru&tab=wn1',
    src: news,
    id: 'news',
  },
  { name: 'Почта', href: 'https://mail.google.com/mail/?tab=wm1', src: gmail },
  {
    name: 'Диск',
    href: 'https://drive.google.com/?tab=wo1&authuser=0',
    src: drive,
    id: 'drive',
  },
  {
    name: 'Календарь',
    href: 'https://www.google.com/calendar?tab=wc1',
    src: cal,
    id: 'cal',
  },
  {
    name: 'Переводчик',
    href: 'https://translate.google.com.ua/?hl=ru&tab=wT1',
    src: trans,
    id: 'trans',
  },
]

export default class Button extends React.Component {
  render() {
    return e(
      'div',
      { className: style.Frame },
      arr.map(i =>
        e(Buttons, { name: i.name, href: i.href, key: i.id, img: i.src }, null),
      ),
    )
  }
}
