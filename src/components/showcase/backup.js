import React from 'react';
import './showcase_style.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from "styled-components";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

 const datas = [
    {
        title: "Бяслагтай талх /том/",
        img_url: require("../../img/talh.png"),
    },
    {
        title: "Шоколадтай Бялуу /том/",
        img_url: require("../../img/cake/cake_2.png"),
    },
    {
        title: "Хар талх /дунд/",
        img_url: require("../../img/bread/bread_2.jpg"),
    }
]



function Showcase() {
    let start = 0;
    let img;
    let name;
    function change_showcase(){
        if(start <= 2){
            img = datas[start].img_url.default;
            name = datas[start].title;
            start++;
        }else {
            start = 0;
        }
        console.log(start)
    }
    setInterval(change_showcase(), 3000)
    return (
        <div className="showcase">

            {/* <div className="leftarrow">
                <ChevronLeftIcon />
            </div>  */}

            <div className="text">
                <h3>Онцгойлох <br /> Бүтээгдэхүүн</h3>
                <p>{name}</p>
                <button className="showcase_btn">Захиалах</button>
            </div>
            <div className="images">
                <img src={img} />
            </div>
            
            {/* <div className='righttarrow'>
                <ChevronRightIcon />
            </div> */}
        </div>
        
    )
}

export default Showcase
