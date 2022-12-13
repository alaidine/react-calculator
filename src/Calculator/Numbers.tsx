import Button from "./Button"

function Numbers() {
    return (
        <div className='numbers_wrapper'>
            <Button text='1'/>
            <Button text='2'/>
            <Button text='3'/>
            <Button text='4'/>
            <Button text='5'/>
            <Button text='6'/>
            <Button text='7'/>
            <Button text='8'/>
            <Button text='9'/>
            <div className='zero'>
                <Button text='0'/>
            </div>
        </div>
    )
}

export default Numbers