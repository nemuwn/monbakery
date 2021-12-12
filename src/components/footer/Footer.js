import React from 'react';

import {IoLocationSharp} from 'react-icons/io5';
import {MdCall} from 'react-icons/md';
import {GrMail} from 'react-icons/gr';
import {BsFacebook, BsTwitter, BsYoutube} from 'react-icons/bs';
import './Footer_style.css'
function Footer() {
    return (
        <div className="footer">
            <div className="footer_content">
                <div className="footer_content_item">
                    <h3>Үндсэн цэс</h3>
                    <ul>
                        <li>
                            <a href="#">
                                Нүүр хуудас
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                Бидний тухай
                            </a>
                            
                        </li>
                        <li>
                        <a href="#">
                                Ажлын байр
                            </a>
                            
                        </li>
                        <li>
                        <a href="#">
                                Холбоо барих
                            </a>
                        </li>

                    </ul>
                    
                </div>
                <div className="footer_content_item">
                    <h3>Туслах цэс</h3>
                    <ul>
                        <li>
                            <a href="#">
                                Төлбөр төлөх боломж
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                Захиалгын заавар
                            </a>
                        </li>
                        <li>
                            
                        <a href="#">
                                Захиалгын түүхүүд
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="footer_content_item">
                    <h3>Тусламж</h3>
                    <ul>
                        <li>
                            <p>
                            Таньд хэрэгтэй мэдээллээр бид тухай бүрт нь хүргэх болно.
                            </p>
                        </li>
                        <li>
                            <div class="inputbox">
                                <input class="form_c" type="email" placeholder="И-мэйл" required="" name="EMAIL"/>
                                <button class="btn" type="submit">ИЛГЭЭХ</button>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="footer_content_item">
                    <h3>Хаяг байршил</h3>
                    <ul>
                        <li>
                            <a>
                                <div>
                                <i>
                                    <IoLocationSharp />
                                </i>
                                <p>
                                Монгол улс, Улаанбаатар хот БГД 07-р хороо<br />“Монбейкери” ХХК
                                </p>

                                </div>
                            </a>
                            
                        </li>
                        <li>
                            <a>
                                <div>
                                <i>
                                    <MdCall />
                                </i>
                                <p>
                                7575 9090
                                </p>
                                </div>
                            </a>
                            
                        </li>
                        <li>
                            <a>
                                <div>
                                    <i>
                                    <GrMail />
                                    </i>
                                    <p>
                                    info@monbakery.mn
                                    </p>
                                </div>
                            </a>
                            
                        </li>
                    </ul>

                </div>
            </div>
            <div  className="footer_bottom">
                <p>
                © 2021 Монбейкери бүх эрх хуулиар хамгаалагдсан
                </p>
                <div>
                    <i>
                        <BsFacebook />
                    </i>
                    <i>
                        <BsTwitter />
                    </i>
                    <i>
                        <BsYoutube />
                    </i>
                </div>
            </div>

        </div>
    )
}

export default Footer
