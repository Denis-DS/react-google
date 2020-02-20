import React from 'react'
import Button from '../../Button/'
import style from './style.module.css'

const AppButton: React.FC = () => {
  const [isShowed, setIsShowed] = React.useState(true)
  const arr = [
    {
      href: 'https://www.google.com/preferences?hl=ru-UA&fg=1',
      name: 'Настройки поиска',
    },
    {
      href: 'https://www.google.com/advanced_search?hl=ru-UA&fg=1',
      name: 'Расширенный поиск',
    },
    {
      href:
        'https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&fg=1',
      name: 'Ваши данные в Поиске',
    },
    {
      href:
        'https://myactivity.google.com/item?utm_source=google&hl=ru-UA&fg=1&restrict=search',
      name: 'История',
    },
    {
      href:
        'https://support.google.com/websearch/?visit_id=637171929083270473-1328549747&hl=ru-UA&rd=2#topic=3378866',
      name: 'Справка по поиску',
    },
    {
      href: 'https://www.google.com/',
      name: 'Отправить отзыв',
    },
  ]
  return (
    <>
      <button className={style.Bttn} onClick={() => setIsShowed(!isShowed)}>
        Настройки
      </button>
      {!isShowed && (
        <div className={style.Menu}>
          {arr.map(i => (
            <Button href={i.href} name={i.name} />
          ))}
        </div>
      )}
    </>
  )
}

export default AppButton
