import React from 'react'
// import Button from '../../Button'
import img from '../../../img/apps.png'
import style from './style.module.css'
import Frame from '../Frame'

const AppButton: React.FC = () => {
  const [isShowed, setIsShowed] = React.useState(true)
  return (
    <div>
      <button className={style.Button} onClick={() => setIsShowed(!isShowed)}>
        <img src={img} alt="lg" className={style.Img} />
      </button>
      {!isShowed ? <Frame /> : null}
    </div>
  )
}

export default AppButton
