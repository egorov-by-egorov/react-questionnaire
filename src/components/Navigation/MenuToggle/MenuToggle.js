import React from 'react'
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        "fa"
    ]

    if (props.menuIsOpen) {
        cls.push('fa-times', classes.open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onMenuToggleHandler}
        />
    )
}

export default MenuToggle