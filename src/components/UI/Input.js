import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    )
}

export default Input

// use 'htmlFor' in label instead of 'for' is a reserved world in js 