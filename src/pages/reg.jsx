import React from 'react'
import '../css/reg.css'
import { Link } from 'react-router-dom'
export default function reg() {
  
  return (
    <div className='reg_div1'>
         <div className='reg_div2'>
          <div className='reg_div21'>
                <img src="https://partners.sello.uz/_nuxt/img/login-logo.a7d2afe.svg" alt="" />
          </div>
          <div className='reg_div22'>
          <div class="sello-steps">
  <div class="step active">
    <div class="icon owner"></div>
    <div class="text">
      <div class="title">Shaxsning ma’lumotlari</div>
      <div class="desc">Ism, familiya va telefon raqamingizni kiriting</div>
    </div>
  </div>
  <div class="step">
    <div class="icon password"></div>
    <div class="text">
      <div class="title">Parol</div>
      <div class="desc">Akkauntni himoyalash uchun ishonchli parol yarating</div>
    </div>
  </div>
  <div class="step">
    <div class="icon company"></div>
    <div class="text">
      <div class="title">Kompaniya ma’lumotlari</div>
      <div class="desc">STIR kiriting va tizim kompaniya ma’lumotlarini avtomatik ravishda to‘ldiradi</div>
    </div>
  </div>
</div>


          </div>
         </div>
         <div className='reg_div3'>
              <div className='reg_div31'>
                      <div className='reg_div311'>
                          <img id='reg_div311_img1' src="https://partners.sello.uz/_nuxt/img/login-logo.a7d2afe.svg" alt="" />
                      </div>
                      <div className='reg_div312'>
                          <button id='royhat_btn'>Ro'yxatdan o'tish</button>
                          <button id='kirish_btn'>Kirish</button>
                          <div className='language'>
                          <button id='language_ru'>RU</button>
                          <button id='language_uz'>UZ</button>
                          </div>
                          <i id='reg_div311_i1' class="fa-solid fa-bars"></i>
                      </div>
              </div>
              <div className='reg_div32'>
                      <div className='reg_div321'>


                          <div className='reg_div32_none'>
                              <h6 id='reg_div32_none_h1'>Qadam 1/3</h6>
                              <img id='reg_div32_none_img1' src="https://partners.sello.uz/_nuxt/img/step-icon.63061d6.png" alt="" />
                              <img id='reg_div32_none_img1' src="img/icon.png" alt="" />
                              <img id='reg_div32_none_img1' src="img/icon.png" alt="" />
                          </div>


                          <div className='reg_img_div1'><img id='reg_div321_img1' src="https://partners.sello.uz/_nuxt/img/user-icon.5dcbcb8.svg" alt="" /></div>
                          <h2 id='reg_div321_h1'>Shaxsning ma’lumotlari</h2>
                          <h6 id='reg_div321_h2'>Profil yaratish uchun ma’lumotlarni to‘ldiring</h6>
                          <div className='reg_div321_input1'>
                              <h6 id='reg_h11111111'>Familiya</h6>
                              <input id='reg_inp1' type="text" placeholder='Familiyangiz'/>
                          </div>
                          <div className='reg_div321_input2'>
                              <h6 id='reg_h11111111'>Ism</h6>
                              <input id='reg_inp1' type="text" placeholder='Ismingiz'/>
                          </div>
                          <div className='reg_div321_input3'>
                              <h6 id='reg_h11111111'>Telefon raqami</h6>
                                <input id='reg_inp1' type="text" placeholder='+998 __ __ __ __ __'/>
                          </div>
                          <button id='davom_etish'>Davom etish</button>
                          <div className='reg_text_div6'><h6 id='h9999999999'>Sizda akkaunt bormi?</h6> <Link id='Avtorizatsiya'>Avtorizatsiya</Link></div>

                      </div>

              </div>
         </div>
    </div>
  )
}
