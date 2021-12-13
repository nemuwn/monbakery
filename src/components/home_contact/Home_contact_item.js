import React from 'react';
import "./Home_contact_style.css";
import {HiPaperAirplane, HiOutlineShoppingCart} from "react-icons/hi"
import {GiEarthAmerica} from "react-icons/gi"
function Home_contact_item(props) {
    function home_contact_icon(name){
        if(name == "airplane") return  <HiPaperAirplane size="50px" />;
        if(name == "earth") return  <GiEarthAmerica size="50px" />;
        if(name == "shopping") return  <HiOutlineShoppingCart size="50px" />;
    }
    return (
        <div className="home_contact_item">
            <i>{home_contact_icon(props.keys)}</i>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    )
}

export default Home_contact_item
