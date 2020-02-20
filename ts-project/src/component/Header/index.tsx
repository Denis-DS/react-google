import React from 'react'
import Button from '../Button/'
import AppButton from './appButton/'
import style from './style.module.css'

const Header: React.FC = () => {
  const arr = [
    { name: 'Почта', href: 'https://mail.google.com/' },
    {
      name: 'Картинки',
      href: 'https://www.google.com.ua/imghp?hl=ru&tab=wi&ogbl',
    },
    {
      name: 'Вход',
      href:
        'https://accounts.google.com/SignOutOptions?hl=ru&continue=https://www.google.com/',
    },
  ]
  return (
    <div className={style.ButtonDiv}>
      {arr.map(i => (
        <Button name={i.name} href={i.href} />
      ))}
      <AppButton />
    </div>
  )
}

export default Header
