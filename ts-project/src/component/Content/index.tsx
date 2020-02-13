import React from 'react';
import google from './google.png'
import CounterWithProps from './Input'
import style from './style.module.css'



const Content:React.FC = () => {
    return  <div className = {style.SearchInput}>
                <img src = {google} alt = 'logo'></img>
                <div>
                    <CounterWithProps/>
                </div>
                <button className = {style.Button}>Поиск в Google</button>
                <button className = {style.Button}>Мне повезёт!</button>
            </div>
}

export default Content