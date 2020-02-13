import React from 'react';
import style from './style.module.css'

interface OwnProps {
    href: string
    name: string
}


const Header:React.FC<OwnProps> = (props) => {
    return  <>
              <a className = {style.Button} href = {props.href}>{props.name}</a>
            </>
}

export default Header