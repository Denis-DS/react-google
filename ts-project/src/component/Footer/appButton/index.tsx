import React from 'react'
import Button from '../../Button/'
import style from './style.module.css'

const arr = [
  {
    href: 'https://www.google.com/preferences?hl=ru-UA&fg=1',
    name: 'Настройки поиска',
    id: 'settings',
  },
  {
    href: 'https://www.google.com/advanced_search?hl=ru-UA&fg=1',
    name: 'Расширенный поиск',
    id: 'search',
  },
  {
    href:
      'https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&fg=1',
    name: 'Ваши данные в Поиске',
    id: 'dataSearch',
  },
  {
    href:
      'https://myactivity.google.com/item?utm_source=google&hl=ru-UA&fg=1&restrict=search',
    name: 'История',
    id: 'history',
  },
  {
    href:
      'https://support.google.com/websearch/?visit_id=637171929083270473-1328549747&hl=ru-UA&rd=2#topic=3378866',
    name: 'Справка по поиску',
    id: 'reference',
  },
  {
    href: 'https://www.google.com/',
    name: 'Отправить отзыв',
    id: 'review',
  },
]

// const AppButton: React.FC = () => {
//   const [isShowed, setIsShowed] = React.useState(true)
//   return (
//     <>
//       <button className={style.Bttn} onClick={() => setIsShowed(!isShowed)}>
//         Настройки
//       </button>
//       {!isShowed && (
//         <div className={style.Menu}>
//           {arr.map(i => (
//             <Button href={i.href} name={i.name} />
//           ))}
//         </div>
//       )}
//     </>
//   )
// }

// export default AppButton

interface State {
  isOpened: boolean
}

export default class AppButton extends React.PureComponent<{}, State> {
  state = {
    isOpened: false,
  }

  myRef: React.RefObject<HTMLDivElement> = React.createRef()

  clousePopup = (event: any) => {
    if (!this.myRef.current?.contains(event.target)) {
      this.setState({ isOpened: false })
    }
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (prevState.isOpened === this.state.isOpened) {
      return
    }

    if (this.state.isOpened) {
      document.addEventListener('click', this.clousePopup)
    } else {
      document.removeEventListener('click', this.clousePopup)
    }
  }

  togglePopup = () => {
    this.setState({ isOpened: !this.state.isOpened })
  }

  render() {
    const { isOpened } = this.state
    return (
      <>
        <button className={style.Bttn} onClick={this.togglePopup}>
          Настройки
        </button>
        {isOpened && (
          <div className={style.Menu} ref={this.myRef}>
            {arr.map(i => (
              <Button href={i.href} key={i.id} name={i.name} />
            ))}
          </div>
        )}
      </>
    )
  }
}
