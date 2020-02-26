import React from 'react'
// import Button from '../../Button'
import img from '../../../img/apps.png'
import style from './style.module.css'
import Frame from '../Frame'

// const AppButton: React.FC = () => {
//   const [isShowed, setIsShowed] = React.useState(true)
//   return (
//     <div>
//       <button className={style.Button} onClick={() => setIsShowed(!isShowed)}>
//         <img src={img} alt="lg" className={style.Img} />
//       </button>
//       {!isShowed ? <Frame /> : null}
//     </div>
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
      <div>
        <button className={style.Button} onClick={this.togglePopup}>
          <img src={img} alt="lg" className={style.Img} />
        </button>
        {isOpened ? (
          <div ref={this.myRef}>
            <Frame />
          </div>
        ) : null}
      </div>
    )
  }
}
