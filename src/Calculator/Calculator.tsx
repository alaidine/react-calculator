import Numbers from './Numbers'
import Operations from './Operations'
import '../index.css'

function Calculator() {
    return (
        <div className='wrapper'>
            <div id='container' className='container'></div>

            <div className='buttons_wrapper'>
                <Numbers/>
                <Operations/>
            </div>
        </div>
    )
}

export default Calculator;