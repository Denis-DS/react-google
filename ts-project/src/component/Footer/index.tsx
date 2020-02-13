import React from 'react';
import Button from '/Users/denis/Downloads/React/ts-project/src/component/Button/';
import AppButton from './appButton/';
import style from './style.module.css';



const Footer:React.FC = () => {
    return  <>
                <div className={style.ButtonDiv}>
                    <div>
                        <Button name='Реклама' href='https://ads.google.com/intl/ru_ua/home/'/>
                        <Button name='Для бизнеса' href='https://www.google.com/services/'/>
                        <Button name='Всё о Google' href='https://about.google/?utm_source=google-UA&utm_medium=referral&utm_campaign=hp-footer&fg=1'/>
                    </div>  
                    <div>
                        <Button name='Конфиденциальность' href='https://policies.google.com/privacy?fg=1'/>
                        <Button name='Условия' href='https://policies.google.com/terms?fg=1'/>
                        <AppButton/>
                    </div>
                </div>
            </>
}

export default Footer