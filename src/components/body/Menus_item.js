import React from 'react'
import './menus_style.css'
import {GiCupcake, GiSlicedBread,GiWrappedSweet} from "react-icons/gi";
import {MdOutlineBakeryDining} from "react-icons/md";
import {BiDrink} from "react-icons/bi";
import reactDom from 'react-dom';

function Menus_item(props) {
    let r = document.querySelector(':root');
    let rs = getComputedStyle(r);

    function handler(){
        props.ss(props.name)
        if(props.name== "Бялуу"){
            r.style.setProperty('--primary-color', 'rgb(100, 56, 129)');
        }
        if(props.name== "Бакери") r.style.setProperty('--primary-color', 'rgb(102, 64, 64)');
        if(props.name== "Талх"){
            r.style.setProperty('--primary-color', '#b68f40');
        }
        if(props.name== "Амттан") r.style.setProperty('--primary-color', '#cb807d');
        if(props.name == "Уух зүйлс") r.style.setProperty('--primary-color', '#5b9279')
       
        
    }
    function menu_icon(name){
        if(name == "Бялуу") return <GiCupcake />;
        if(name == "Бакери") return <MdOutlineBakeryDining />;
        if(name == "Талх") return <GiSlicedBread />;
        if(name == "Амттан") return <GiWrappedSweet />;
        if(name == "Уух зүйлс") return <BiDrink />;

    }
    return (
        <li onClick={handler} className="menus_btn">
            <i> {menu_icon(props.name)}</i>
            <span >{props.name}</span>
        </li>
    )
}

export default Menus_item
