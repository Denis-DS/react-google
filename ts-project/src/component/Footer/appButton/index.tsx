import React from 'react';
import Button from '/Users/denis/Downloads/React/ts-project/src/component/Button/';
import style from './style.module.css';

const AppButton:React.FC = () => {
    const [isShowed, setIsShowed] = React.useState(true)
    return  <>
                <button className={style.Bttn} onClick={()=> setIsShowed(!isShowed)}>Настройки</button>
                {!isShowed && (
                    <div className={style.Menu}>
                        <Button href ='https://www.google.com/preferences?hl=ru-UA&fg=1' name = 'Настройки поиска'/>
                        <Button href ='https://www.google.com/advanced_search?hl=ru-UA&fg=1' name = 'Расширенный поиск'/>
                        <Button href ='https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu&fg=1' name = 'Ваши данные в Поиске'/>
                        <Button href ='https://myactivity.google.com/item?utm_source=google&hl=ru-UA&fg=1&restrict=search' name = 'История'/>
                        <Button href ='https://support.google.com/websearch/?visit_id=637171929083270473-1328549747&hl=ru-UA&rd=2#topic=3378866' name = 'Справка по поиску'/>
                        <Button href ='https://www.google.com/' name = 'Отправить отзыв'/>
                    </div>
                )} 
            </>
}

export default AppButton