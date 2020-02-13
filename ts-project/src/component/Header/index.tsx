import React from 'react';
import Button from '/Users/denis/Downloads/React/ts-project/src/component/Button/';
import AppButton from './appButton/';
import style from './style.module.css';




const Header:React.FC = () => {
    return  <>
                <div className ={style.ButtonDiv}>
                    <Button name='Почта' href='https://mail.google.com/'/>
                    <Button name='Картинки' href='https://www.google.com.ua/imghp?hl=ru&tab=wi&ogbl'/>
                    <AppButton/>
                    <Button name='Вход' href='https://accounts.google.com/SignOutOptions?hl=ru&continue=https://www.google.com/'/>
                </div>
            </>
}

export default Header