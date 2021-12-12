import React from 'react'
import Menus_item from './Menus_item'

function Menus(props) {
    return (
        <ul className="menus">
            <Menus_item name="Бялуу" ss = {props.ss} />
            <Menus_item name="Бакери" ss = {props.ss} />
            <Menus_item name="Талх" ss = {props.ss} />
            <Menus_item name="Амттан" ss = {props.ss}/>
            <Menus_item name="Уух зүйлс" ss = {props.ss} />
        </ul>
    )
}

export default Menus
