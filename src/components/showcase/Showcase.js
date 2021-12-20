import React, { useState } from "react";
import './showcase_style.css';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import styled from 'styled-components'



 export const ShowcaseDatas = [
    {
        title: "Бяслагтай талх",
        image: 'https://cdn.discordapp.com/attachments/725396765196550145/919585009487187998/talh.png',
    },
    {
        title: "Орео чийз бялуу",
        image: 'https://cdn.discordapp.com/attachments/725396765196550145/919629584067072010/78963-14_adobespark.png',
    },
    {
        title: "Багц талх /дунд/",
        image: 'https://cdn.discordapp.com/attachments/725396765196550145/919628292561186886/product-slider.png',
    }
]


const Showcase = ({slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}
const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

// function Dots({ activeIndex, onclick, ShowcaseDatas }) {
//     return (
//       <div className="all-dots">
//         {ShowcaseDatas.map((slide, index) => (
//           <span
//             key={index}
//             className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
//             onClick={() => onclick(index)}
//           ></span>
//         ))}
//       </div>
//     );
//   }

console.log(current)
if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}

    return (
       <section className='slider'>
           <ChevronLeftRoundedIcon className='btn-sh left-arrow' onClick={prevSlide} sx={{ fontSize: 50 }}/>
           <ChevronRightRoundedIcon className='btn-sh right-arrow' onClick={nextSlide} sx={{ fontSize: 50 }}/>
       {ShowcaseDatas.map((slide, index) => {
           return(
               <div className="showc " > 
                    <div className="shDesc ">
                        
                        <div className={index === current ? 'slide active ' : 'slide' } key={index}>
                        {index === current && (<p >Онцгойлох  Бүтээгдэхүүн</p>)}
                        </div>

                        <div className={index === current ? 'slide active ' : 'slide'} key={index}>
                        {index === current && (<h1 >{slide.title}</h1>)}
                        </div>

                        <div className={index === current ? 'slide active ' : 'slide'} key={index}>
                        {index === current && (<button className="showcase_btn">Захиалах</button> )}
                        </div>

                    </div>

                    <div className={index === current ? 'slide active ' : 'slide'} key={index}>
                    {index === current && (<img src ={slide.image} alt='showc'/>)}
                    </div>
                    
               </div>
           ) 
           
       })}
       </section>
        
    )
}

export default Showcase
