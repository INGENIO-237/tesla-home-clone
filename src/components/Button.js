import React from 'react'
import './Button.css'

const Button = ({link, imp, text}) =>{
    return(
        <div className={`button ${imp == 'secondary' ? 'button__white' : ''}`}>
            <a href={link}>
                {text}
            </a>
        </div>
    )
}

export default Button