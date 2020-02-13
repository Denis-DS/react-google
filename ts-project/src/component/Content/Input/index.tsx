import React from 'react'
import voiceSearch from './voiceSearch.png'
import style from './style.module.css'


interface State {
    valueOfInput: string
}

const myRe = /^[A-Za-zА-Яа-яЁё\s]+$/;

// class CounterWithProps extends React.Component<State> {
//     state ={
//         valueOfInput: '' 
//     }
    

//     render() {
//         return (
//             <>
//                 <div className = {style.Google}>
//                     <input className = {style.Search} type ='text' pattern='^[A-Za-zА-Яа-яЁё\s]+$' 
//                             value={this.state.valueOfInput} 
//                             onChange={
//                                         e => {
//                                                 if(myRe.exec(' '+e.target.value)){this.setState({valueOfInput: e.target.value})}
//                                             }
//                                     }
//                     />
//                     <div className = {style.BttnDiv}>
//                         <button className = {style.Buttons}><img className = {style.Img} src = 'https://www.gstatic.com/inputtools/images/tia.png' alt = 'logo'></img></button>
//                         <button className = {style.Buttons}><img className = {style.Img} src = {voiceSearch} alt = 'logo'></img></button>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

const CounterWithProps:React.FC = () => {
    const [values, setValues] = React.useState('')
    return <>
                <div className = {style.Google}>
                        <input className = {style.Search} type ='text' pattern='^[A-Za-zА-Яа-яЁё\s]+$' 
                            value={values} 
                            onChange={
                                        e => {
                                                if(myRe.exec(' '+e.target.value)){ 
                                                    setValues(e.target.value)
                                                }
                                            }
                                    }
                        />
                        <div className = {style.BttnDiv}>
                            <button className = {style.Buttons}><img className = {style.Img} src = 'https://www.gstatic.com/inputtools/images/tia.png' alt = 'logo'></img></button>
                            <button className = {style.Buttons}><img className = {style.Img} src = {voiceSearch} alt = 'logo'></img></button>
                        </div>
                    </div>
            </>
}

export default CounterWithProps