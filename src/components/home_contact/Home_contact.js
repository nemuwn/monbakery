import React from 'react';
import Home_contact_item from './Home_contact_item';
import "./Home_contact_style.css";

function Home_contact() {
    return (
        <div className="home_contact">
            <Home_contact_item keys="airplane" title="Хүргэлттэй Бүтээгдэхүүн" desc="Манайхаас гаргаж буй хүргэлттэй бүтээгдэхүүн" />
            <Home_contact_item keys="earth" title="Салбарын байршил" desc="Манай салбар байршилуудыг харах боломжтой" />
            <Home_contact_item keys="shopping" title="Миний сагс" desc="Захиалгын бүх бүтээгдэхүүн харан захиалга өгөх"/>
        </div>
    )
}

export default Home_contact
