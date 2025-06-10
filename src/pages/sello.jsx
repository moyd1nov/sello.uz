import React from 'react'
import '../css/sello.css'
import { Link } from 'react-router-dom'

export default function sello() {
  return (
    <div className='div'>
      <header>
              <div className='header_div1'>
                  <div className='header_div11'>
                    <img id='img1' src="https://sello.uz/template/images/sello.png" alt="" />
                  </div>
                  <div className='header_div12'>
                              <div class="orqa_div1">
                                <button class="btn1">Mijozlarga</button>
                                <div class="tag-div1">
                                  <div className='tag-div11'>
                                    <h1>Sello Pay</h1>
                                    <Link id='tag_link11' to=''>Мои карты</Link>
                                    <Link id='tag_link12' to=''>Платежи</Link>
                                    <Link id='tag_link13' to=''>Переводы 0%</Link>
                                    <Link id='tag_link14' to=''>Мой дом</Link>
                                    <Link id='tag_link15' to=''>Мой автомобиль</Link>
                                    <Link id='tag_link16' to=''>Страхование</Link>
                                    <Link id='tag_link17' to=''>Humo Pay</Link>
                                    <Link id='tag_link18' to=''>Рассрочка</Link>
                                  </div>
                                  <div className='tag-div12'>
                                    <h1>Sello Market</h1>
                                    <Link id='tag_link19' to=''>Электроника</Link>
                                    <Link id='tag_link10' to=''>Бытовая техника</Link>
                                    <Link id='tag_link111' to=''>Одежда и обувь</Link>
                                    <Link id='tag_link112' to=''>Косметика и парфюмерия</Link>
                                    <Link id='tag_link113' to=''>Товары для дома</Link>
                                    <Link id='tag_link114' to=''>Детские товары</Link>
                                    <Link id='tag_link115' to=''>Спортивные товары</Link>
                                    <Link id='tag_link116' to=''>Продукты питания</Link>
                                    <Link id='tag_link117' to=''>Автотовары</Link>
                                    <Link id='tag_link118' to=''>Зоотовары</Link>
                                  </div>
                                  <div className='tag-div13'>
                                    <h1>Sello Logistics</h1>
                                    <Link id='tag_link119' to=''>Доставка товаров из Sello Market</Link>
                                    <Link id='tag_link110' to=''>Курьерская доставка по городу</Link>
                                    <Link id='tag_link111' to=''>Междугородняя доставка</Link>
                                  </div>
                                </div>
                              </div>
                              <div class="orqa_div2">
                                <button class="btn2">Biznes uchun</button>
                                <div class="tag-div2">
                                    <h1>Sello mahsulotlari</h1>
                                    <Link id='tag_link21' to=''>Sello Pay</Link>
                                    <Link id='tag_link21' to=''>Sello Logistics</Link>
                                    <Link id='tag_link21' to=''>Sello Market</Link>
                                </div>
                              </div>
                  </div>
                  <div className='header_div13'>
                    <Link id='link1' to=''>Продавать на Sello</Link>
                      <div class="dropdown">
                                                    <div class="dropdown-toggle">O‘zbekcha</div>
                                                      <div class="dropdown-menu">
                                                      <input type="radio" id="uz" name="lang" />
                                                      <label for="uz">O‘zbekcha</label>

                                                      <input type="radio" id="ru" name="lang" />
                                                      <label for="ru">Ruscha</label>
                                                      </div>
                                                  </div>
                      <button id='btn3'><i id='icon1' class="fa-solid fa-location-dot"></i>Ташкент</button>

                  </div>
              </div>
                <div className='header_div2'>

                </div>
              <div className='header_div3'>
              </div>
      </header>
      <main>
        <div className='main_div1'>
          <div className='main_div11'>

          </div>
          <div className='main_div12'>

          </div>
        </div>
      </main>
    </div>
  )
}
