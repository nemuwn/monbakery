import React from 'react';
import './sale_style.css';

function Sale() {
    return (
        <div class="sale_p">
   
          <div class="space1"></div>
          
            <div class="sl_heading">
              <h2 class="sl_heading_title">Энэ долоо хоногийн хямдрал</h2>
              <div class="sl_heading_separate"></div>
              <p class="sl_heading_desc">We offer something different to local and foreign patrons and ensure you enjoy a memorable food experience every time.</p>
            </div>
  
            <div class="space2"></div>

                         <div class="sale_product">
                            <div class="product_container">
                              <div class="content-box">
                                <h4 class="title_p"> <a href="#" title="Anjelo"> Анжело </a></h4>
                                <div class="desc_p">
                                    <h6 class="title_desc">Найрлага:</h6>
                                    <p class="description_desc">БГ-055, өндөг, амтлаг крем, маргарин, гүзээлзгэнийн чанамал, маслын крем, элсэн чихэр, ус, далдуу модны самрын тос, сүү, сахарын пудр,  Е-491, давс</p>
                                    <h6 class="title_desc">Хадгалах хугацаа:</h6>
                                    <p class="description_desc">Температур:	0-+6 градус <br/> Хугацаа: 48 цаг</p>           
                                    <h6 class="price_desc">Зөвхөн Өнөөдөр:&nbsp; &nbsp; <del>5,090 төг.</del>&nbsp; &nbsp;<ins>4,000 төг.</ins></h6>
                                </div>
                                <div class="order_btn">
                                   <a href="#" title="angelo" class="btn btn-lg btn-outline btn-round btn-secondary"> ЗАХИАЛАХ</a>
                                </div>
                              </div>

                              <div class="product_image">
                                <figure class="prod-1">
                                    <img width="413" height="413" src="https://cdn.discordapp.com/attachments/725396765196550145/916726765290917918/bakery_2.png" class="img-product" alt=""/>
                                  </figure>
                              </div>
                           
                            </div>
                         </div>


          <div class="space3"></div>

        
        </div>

    )
}

export default Sale