import React from 'react'
import voiceSearch from './voiceSearch.png'
import style from './style.module.css'


interface OwnProps {
    counter: number
}

interface State {
    valueOfInput: string
}

const myRe = /^[A-Za-zА-Яа-яЁё\s]+$/;
// myRe.exec("cdbbdbsb zjbjnjn")[0]

class CounterWithProps extends React.Component<OwnProps, State> {
    state ={
        valueOfInput: '' 
    }
    

    render() {
        return (
            <>
                {/* <p>{this.props.counter} {this.state.value}</p>
                <button onClick = {()=> this.setState({value: this.state.value +1})}>Click me</button> */}
                    <div className = {style.Google}>
                        <input className = {style.Search} type ='text' pattern='^[A-Za-zА-Яа-яЁё\s]+$' 
                                value={this.state.valueOfInput} 
                                onChange={
                                            e => {
                                                    if(myRe.exec(' '+e.target.value)){this.setState({valueOfInput: e.target.value})}
                                                }
                                        }
                        />
                        <div className = {style.BttnDiv}>
                            <button className = {style.Buttons}><img className = {style.Img} src = 'https://www.gstatic.com/inputtools/images/tia.png' alt = 'logo'></img></button>
                            <button className = {style.Buttons}><img className = {style.Img} src = {voiceSearch} alt = 'logo'></img></button>
                        </div>
                    </div>
            </>
        )
    }
}

// const CounterWithProps:React.FC<OwnProps> = (props) => {
//     return <p>{props.counter}</p>
// }

export default CounterWithProps