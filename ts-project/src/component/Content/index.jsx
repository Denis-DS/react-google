import React from 'react'
import google from '../../img/google.png'
import CounterWithProps from './counterWithProps'
import style from './style.module.css'

const Content = () => {
  const counter = 0
  return (
    <div className={style.SearchInput}>
      <img src={google} alt="logo"></img>
      <div>
        <CounterWithProps counter={counter} />
      </div>
      <button className={style.Button}>Поиск в Google</button>
      <button className={style.Button}>Мне повезёт!</button>
    </div>
  )
}

export default Content
