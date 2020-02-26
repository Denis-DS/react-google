import React from 'react'
import voiceSearch from '../../../img/voiceSearch.png'
import style from './style.module.css'

interface OwnProps {
  counter: number
}

interface State {
  valueOfInput: string
}

const myRe = /^[A-Za-zА-Яа-яЁё\s]+$/

class CounterWithProps extends React.Component<OwnProps, State> {
  state = {
    valueOfInput: '',
  }

  render() {
    return (
      <div>
        {/* <p>{this.props.counter} {this.state.value}</p>
                <button onClick = {()=> this.setState({value: this.state.value +1})}>Click me</button> */}
        <div className={style.Google}>
          <input
            className={style.Search}
            type="text"
            value={this.state.valueOfInput}
            onChange={e =>
              myRe.exec(' ' + e.target.value)
                ? this.setState({ valueOfInput: e.target.value })
                : null
            }
          />
          <div className={style.BttnDiv}>
            <button className={style.Buttons}>
              <img
                className={style.Img}
                src="https://www.gstatic.com/inputtools/images/tia.png"
                alt="logo"
              ></img>
            </button>
            <button className={style.Buttons}>
              <img className={style.Img} src={voiceSearch} alt="logo"></img>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

// const CounterWithProps:React.FC<OwnProps> = (props) => {
//     return <p>{props.counter}</p>
// }

export default CounterWithProps
