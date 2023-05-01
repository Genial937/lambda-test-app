import React, { useState } from 'react'

const Button = ({ title }: any) => {
    const [click, setClicked] = useState(false);
    const clicked = () => {
        setClicked(true);
        alert('clicked')
    }
    return (
        <div>
            <button onClick={clicked} type='button'>{title}</button>
        </div>
    )
}

export default Button