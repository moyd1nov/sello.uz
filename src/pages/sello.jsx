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
                                <button class="btn2">Mijozlarga</button>
                                <div class="tag-div1">
                                  <div className='tag-div11'>
                                    <h1 id='tag_h1'>Sello Pay</h1>
                                    <Link id='tag_link1' to=''>Мои карты</Link>
                                    <Link id='tag_link1' to=''>Платежи</Link>
                                    <Link id='tag_link1' to=''>Переводы 0%</Link>
                                    <Link id='tag_link1' to=''>Мой дом</Link>
                                    <Link id='tag_link1' to=''>Мой автомобиль</Link>
                                    <Link id='tag_link1' to=''>Страхование</Link>
                                    <Link id='tag_link1' to=''>Humo Pay</Link>
                                    <Link id='tag_link1' to=''>Рассрочка</Link>
                                  </div>
                                  <div className='tag-div12'>
                                    <h1 id='tag_h1'>Sello Market</h1>
                                    <Link id='tag_link1' to=''>Электроника</Link>
                                    <Link id='tag_link1' to=''>Бытовая техника</Link>
                                    <Link id='tag_link1' to=''>Одежда и обувь</Link>
                                    <Link id='tag_link1' to=''>Косметика и парфюмерия</Link>
                                    <Link id='tag_link1' to=''>Товары для дома</Link>
                                    <Link id='tag_link1' to=''>Детские товары</Link>
                                    <Link id='tag_link1' to=''>Спортивные товары</Link>
                                    <Link id='tag_link1' to=''>Продукты питания</Link>
                                    <Link id='tag_link1' to=''>Автотовары</Link>
                                    <Link id='tag_link1' to=''>Зоотовары</Link>
                                  </div>
                                  <div className='tag-div13'>
                                    <h1 id='tag_h1'>Sello Logistics</h1>
                                    <Link id='tag_link1' to=''>Доставка товаров из Sello Market</Link>
                                    <Link id='tag_link1' to=''>Курьерская доставка по городу</Link>
                                    <Link id='tag_link1' to=''>Междугородняя доставка</Link>
                                  </div>
                                </div>
                              </div>
                              <div class="orqa_div2">
                                <button class="btn2">Biznes uchun</button>
                                <div class="tag-div2">
                                    <h1 id='tag_h1'>Sello mahsulotlari</h1>
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
                <img id='img2' src="https://sello.uz/template/images/banners/main-uz.webp" alt="" />
              </div>
      </header>
      <main>
        <div className='main_div1'>
          <div className='main_div11'>
            <h1 id='main_h1'>Sello servislari</h1>
          </div>
          <div className='main_div12'>
          <div class="carousel" mask>
                                  <article>
                                    <Link className='card_div1'>
                                      <div className='card_text1'>
                                        <h1 id='card_h1'>Sello Pay</h1>
                                        <h1 id='card_h2'>Komissiyasiz o‘tkazmalar</h1>
                                      </div>
                                      <div className='card_img1'>
                                        <img id='card_img' src="https://sello.uz/template/images/banners/servisy_sello/perevody-bezkomissii.png" alt="" />
                                      </div>
                                    </Link>
                                  </article>
                                  <article>
                                    <Link className='card_div2'>
                                      <div className='card_text2'>
                                        <h1 id='card_h1'>Sello Pay</h1>
                                        <h1 id='card_h2'>Мой дом</h1>
                                      </div>
                                      <div className='card_img2'>
                                        <img src="https://sello.uz/template/images/banners/servisy_sello/moy-dom.png" alt="" />
                                      </div>
                                    </Link>
                                  </article>
                                  <article>
                                    <Link className='card_div3'>
                                      <div className='card_text3'>
                                        <h1  id='card_h1'>Sello Pay</h1>
                                        <h1 id='card_h2'>Мой автомобиль</h1>
                                      </div>
                                      <div className='card_img3'>
                                        <img src="https://sello.uz/template/images/banners/servisy_sello/moy-avto.png" alt="" />
                                      </div>
                                    </Link>
                                  </article>
                                  <article>
                                    <Link className='card_div4'>
                                      <div className='card_text4'>
                                        <h1 id='card_h1'>Sello Pay</h1>
                                        <h1 id='card_h2'>Страхование</h1>
                                      </div>
                                      <div className='card_img4'>
                                        <img src="https://sello.uz/template/images/banners/servisy_sello/straxovanie.png" alt="" />
                                      </div>
                                    </Link>
                                  </article>
                                  <article>
                                    <Link className='card_div5'>
                                      <div className='card_text5'>
                                        <h1  id='card_h1'>Sello Logistics</h1>
                                        <h1 id='card_h2'>O‘zbekiston bo‘ylab posilkalarni jo‘nating</h1>
                                      </div>
                                      <div className='card_img5'>
                                        <img src="https://sello.uz/template/images/banners/servisy_sello/otpravlyayte-posilki-po-uzb.png" alt="" />
                                      </div>
                                    </Link>
                                  </article>
                                  <article>
                                    <Link className='card_div6'>
                                      <div className='card_text6'>
                                        <h1 id='card_h1'>Sello Logistics</h1>
                                        <h1 id='card_h2'>Toshkent bo‘yicha tezkor yetkazib berish</h1>
                                      </div>
                                      <div className='card_img6'>
                                        <img src="https://sello.uz/template/images/banners/servisy_sello/ekspress-dostavka-po-tash.png" alt="" />
                                      </div>
                                    </Link>
                                  </article>



                                </div>
          </div>
        </div>
        <div className='main_div2'>
          <div className='main_div21'>
              <h1 id='main_h2'>Sello Market</h1>
          </div>
          <div className='main_div22'>
              <div className='main_div221'>
                        <div className='main_card1'>
                              <div className='main_card1_div1'>
                                  <h5 id='card_h1'>Электроника и <br /> техника</h5>
                              </div>
                              <div className='main_card1_div2'>
                                  
                              </div>
                        </div>
                        <div className='main_card2'>
                              <div className='main_card2_div1'>
                                  <h5 id='card_h1'>Одежда</h5>
                              </div>
                              <div className='main_card2_div2'>

                              </div>
                        </div>
                        <div className='main_card3'>
                              <div className='main_card3_div1'>
                              <h5 id='card_h1'>Обувь</h5>
                              </div>
                              <div className='main_card3_div2'>

                              </div>
                        </div>
                        <div className='main_card4'>
                              <div className='main_card4_div1'>
                              <h5 id='card_h1'>Аксесуары</h5>

                              </div>
                              <div className='main_card4_div2'>

                              </div>
                        </div>
                        <div className='main_card5'>
                              <div className='main_card5_div1'>
                              <h5 id='card_h1'>Красота и <br /> здоровье</h5>

                              </div>
                              <div className='main_card5_div2'>

                              </div>
                        </div>
              </div>
              <div className='main_div222'>
              <div className='main_card6'>
                              <div className='main_card6_div1'>
                              <h5 id='card_h1'>Дом и сад</h5>

                              </div>
                              <div className='main_card6_div2'>
                              </div>
                        </div>
                        <div className='main_card7'>
                              <div className='main_card7_div1'>
                              <h5 id='card_h1'>Спорт и активный <br /> отдых</h5>

                              </div>
                              <div className='main_card7_div2'>

                              </div>
                        </div>
                        <div className='main_card8'>
                              <div className='main_card8_div1'>
                              <h5 id='card_h1'>Товары для детей</h5>

                              </div>
                              <div className='main_card8_div2'>

                              </div>
                        </div>
                        <div className='main_card9'>
                              <div className='main_card9_div1'>
                              <h5 id='card_h1'>Автотовары</h5>

                              </div>
                              <div className='main_card9_div2'>

                              </div>
                        </div>
                        <div className='main_card10'>
                              <div className='main_card10_div1'>
                              <h5 id='card_h1'>Продукты</h5>

                              </div>
                              <div className='main_card10_div2'>

                              </div>
                        </div>
              </div>
              <div className='main_div223'>
              <div className='main_card11'>
                              <div className='main_card11_div1'>
                              <h5 id='card_h1'>Книги и <br /> канцелярия</h5>

                              </div>
                              <div className='main_card11_div2'>

                              </div>
                        </div>
                        <div className='main_card12'>
                              <div className='main_card12_div1'>
                              <h5 id='card_h1'>Товары для <br /> животых</h5>

                              </div>
                              <div className='main_card12_div2'>

                              </div>
                        </div>
                        <div className='main_card13'>
                              <div className='main_card13_div1'>
                              <h5 id='card_h1'>Аптека</h5>

                              </div>
                              <div className='main_card13_div2'>

                              </div>
                        </div>
                        <div className='main_card14'>
                              <div className='main_card14_div1'>
                              <h5 id='card_h1'>Бытовая техника</h5>

                              </div>
                              <div className='main_card14_div2'>

                              </div>
                        </div>
                        <div className='main_card15'>
                              <div className='main_card15_div1'>
                              <h5 id='card_h1'>Досуг и хобби</h5>   

                              </div>
                              <div className='main_card15_div2'>

                              </div>
                        </div>
              </div>

          </div>
        </div>
        <div className='main_div3'>
            <div className='main_div31'>
                <h1 id='main_h2'>Sello mahsulotlari</h1>
            </div>
          <div className='main_div32'>
              <div className='main_div33'>
                <div className='main_div34'>
                    <div className='main_div341'>
                        <h4 id='main_text1'>Sello Pay</h4>
                        <h1 id='main_text2'>0% komissiya bilan to‘lovlar va pul o‘tkazmalari</h1>
                        <Link id='main_text3' to=''>Sello Pay ochish</Link>
                    </div>
                    <div className='main_div342'>
                      <img id='main_img1' src="	https://sello.uz/template/images/banners/produkty_sello/pay.png" alt="" />
                    </div>
                </div>
                <div className='main_div35'>
                <div className='main_div341'>
                        <h4 id='main_text1'>Sello Pay</h4>
                        <h1 id='main_text2'>0% komissiya bilan to‘lovlar va pul o‘tkazmalari</h1>
                        <Link id='main_text3' to=''>Sello Pay ochish</Link>
                    </div>
                    <div className='main_div342'>
                    <img id='main_img1' src="	https://sello.uz/template/images/banners/produkty_sello/market.png" alt="" />
                    </div>
                </div>
              </div >
              <div className='main_div36'>
              <div className='main_div341'>
                        <h4 id='main_text1'>Sello Pay</h4>
                        <h1 id='main_text2'>0% komissiya bilan to‘lovlar va pul o‘tkazmalari</h1>
                        <Link id='main_text3' to=''>Sello Pay ochish</Link>
                  </div>
                  <div className='main_div342'>
                  <img id='main_img1' src="https://sello.uz/template/images/banners/produkty_sello/logistics.png" alt="" />
                  </div>
              </div>
            </div>              
        </div>
          <div className='main_div4'>
                <div className='main_div41'>
                <h1 className='main_h2'>Biznes uchun</h1>
                </div>
                <div className='main_div42'>
                            <div className='main_div421'>
                              <div className='main_div423'>
                                  <img id='img111' src="https://sello.uz/template/images/frame-1.png" alt="" />
                                  <div id='left1'>
                                  <strong id='str1'>Sello Pay</strong>
                                  <h1 id='main_text5'>Biznesingiz uchun ilovani ulang</h1>
                                  </div>
                                  <Link to='/reg' id='ulanish_btn'>Ulanish</Link>
                                  

                              </div>
                              <div className='main_div424'>
                                <img src="https://sello.uz/template/images/frame-2.png" alt="" />
                              </div>
                            </div>
                            <div className='main_div422'>
                                    <div className='main_div4221'>
                                      <div className='main_div4_div1'>
                                      <h4 id='main_text1'>Sello Market</h4>
                                      <h1 id='main_text2'>Bizning merchant bo'ling va 65 ta BTP’dan foydalaning</h1>
                                      <Link id='main_text3' to=''>Посмотреть локации</Link>
                                      </div>
                                      <div className='main_div4_div2'>
                                        <img src="	https://sello.uz/template/images/merchant.png" alt="" />
                                      </div>
                                    </div>
                                    <div className='main_div4222'>
                                    <div className='main_div4_div1'>
                                      <h4 id='main_text1'>Sello Logistics</h4>
                                      <h1 id='main_text2'>Logistika xizmati orqali mijozlarga bank kartalarini yetkazib berish</h1>
                                      <Link id='main_text3' to=''>Sello Logistics ochish</Link>
                                      </div>
                                      <div className='main_div4_div2'>
                                        <img src="	https://sello.uz/template/images/card-delivery.png" alt="" />
                                      </div>
                                    </div>
                            </div>
                </div>
          </div>
          <div className='main_div6'>
            <div className='main_div61'>
              <h2>Hamkor bo‘lish</h2>
            </div>
            <div className=' main_div62'>
              <div className='main_div621'>
                  <div className='main_div6211'>
                      <img src="https://sello.uz/images/banner/sello-logo.svg" alt="" />
                      <h3 id='main_div6211_h1'>Marketpleysida sotishni boshlang</h3>
                      <h6 id='main_div6211_h2'>Minglab mijozlar sizning mahsulotingizni kutishmoqda</h6>
                      <button id='main_div6211_btn1'>Ariza qoldirish</button>
                  </div>
              </div>
              <div className='main_div622'>
                  <div className='main_div6221'>
                    <h3>Bizning hamkorlarimiz</h3>
                    <h6 id='main_div6221_h6'>Biz bilan hamkorlik qilib, siz o'z do'koningiz savdosini <br /> oshirishingiz mumkin.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ0</h6>
                  </div>
              </div>
            </div>
          </div>
          <div className='main_div5'>
                <h2>Sello.uz ilovasiga o'tish uchun, skanerlang</h2>
                <img src="https://sello.uz/images/qr-code.gif" alt="" />
          </div>
      </main>
      <footer>
<div className="footer_div1">
    <img id="rasm21" src="https://sello.uz/images/logo3.svg" alt="" />
    <p className="suz5">To'lov usullari</p>
    <div className="as16"><img id="rasm22" src="https://sello.uz/images/payment/humo.svg" alt="" /></div>
    <div className="as17"><img id="rasm23" src="https://sello.uz/images/payment/uzcard.svg" alt="" /></div>
    <div className="as18"><img id="rasm24" src="https://sello.uz/images/payment/sellopay.svg" alt="" /></div>
    <p className="suz6">
        Xizmatlar litsenziyalangan (2024-yil 18- <br />
        maydagi 47-sonli litsenziya) va O‘zbekiston <br />
        Respublikasi Markaziy bankining talablariga <br />
        to‘liq muvofiqdir
    </p>
</div>
<div className="footer_div2">
    <h1 className="h12">Nima uchun bizni <br /> tanlashadi</h1>
    <Link id="a1" to="">To'lov</Link>
    <Link id="a2" to="">Yetkazib berish</Link>
    <Link id="a3" to="">Tovarni qaytarish va <br /> almashtirish</Link>
    <Link id="a4" to="">Rekvizitlar</Link>
    <Link id="a5" to="">Tarqatish punktlari</Link>
    <Link id="a6" to="">Sello SuperAPP ilovasi</Link>
    <Link id="a7" to="">Adolatli muddatli to'lov</Link>
    <Link id="a8" to="">Targ'ibot qoidalari</Link>
    <Link id="a9" to="">brands</Link>
    <Link id="a10" to="">sellers</Link>

    <h1 className="h13">Kompaniya haqida</h1>
    <Link id="a11" to="">Biz haqimizda</Link>
    <Link id="a12" to="">Kontaktlar</Link>
    <Link id="a13" to="">Shaxsiy ma'lumotlarni qayta <br /> ishlash siyosati</Link>
    <Link id="a14" to="">Ommaviy oferta</Link>
    <Link id="a15" to="">Foydalanish shartlari</Link>
    <Link id="a16" to="">Регламенты</Link>
    <Link id="a17" to="">Ko'p so'raladigan savollar</Link>
    <Link id="a18" to="">Korporativ boshqaruv</Link>
    <Link id="a19" to="">Tariflar va komissiyalar</Link>
    <Link id="a20" to="">To'lov tashkiloti litsenziyasi</Link>

    <h1 className="h14">Aloqa</h1>
    <p className="suz7">Bizga qo'ng'iroq qiling:</p>
    <Link id="a21" to="">+998 (78) 113 09 00</Link>
    <p className="suz8">Bizga yozing:</p>
    <Link id="a22" to="">support@sello.uz</Link>
    <p className="suz9">Ijtimoiy tarmoqlar:</p>
    <div id="dv1"><img src="https://sello.uz/images/icn/social-fb.svg" alt="" /></div>
    <div id="dv2"><img src="https://sello.uz/images/icn/social-tg.svg" alt="" /></div>
    <div id="dv3"><img src="https://sello.uz/images/icn/social-ins.svg" alt="" /></div>
</div>
<div className="footer_div3">
    <h1 className="h15">Ilovani yuklab oling</h1>
    <div id="dv4"><img id="rasm25" src="https://sello.uz/images/social/appstore.svg" alt="" /></div>
    <div id="dv5"><img id="rasm26" src="https://sello.uz/images/social/googleplay.svg" alt="" /></div>
    <img id="rasm27" src="https://sello.uz/images/fixed/iPhone.png" alt="" />
    <img id="rasm30" src="https://sello.uz/images/pcidss.png" alt="" />
</div>

      </footer>
    </div>
  )
}
