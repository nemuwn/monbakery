import React from 'react'
import "./Product_dialog_box_style.css"
import { IoClose } from "react-icons/io5"

function Product_dialog_box(props) {
    function handler(e){
        props.change(false);
    }
    console.log(props.data[0].title)

    return (
        <div className="product_dialog_box">
            <div className="product_dialog_box_item">
            <IoClose className="dialog_close" onClick={handler} size={40} />
                <div className="dialog_drap">
                    <img src={props.data[0].img_url.default} />
                    <div>
                        <h1>
                             {props.data[0].title}
                        </h1>
                        <ul> Тэжээллэг чанар
                            <li>
                                <span>Hүүрс ус :</span><span>45g</span>
                            </li>
                            <li>
                                <span>Тослог :</span><span>0.2g</span>
                            </li>
                            <li>
                                <span>Уураг :</span><span>23.73g</span>
                            </li>
                            <li>
                                <span>Илчлэг :</span><span>10.73g</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nairlaga">
                    <h3>Найрлага</h3>
                    <p>
                    Найрлага
өндөг элсэн чихэр хар шоколад маслын крем маргарин молоко далдуу модны самрын тос улаанбуудайн гурил БГ-055 амтат крем тараг сахарын пудр какао сийрэгжүүлэгч Е-500
                    </p>
                </div>
                <div className="too_shirheg">
                    <div>
                        <h3>Тоо ширхэг</h3>
                        <input type="number" placeholder="0" max={10} min={0} />
                    </div>
                    <button>Захиалах</button>
                </div>

            </div>
        </div>
    )
}

export default Product_dialog_box
