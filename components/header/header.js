


class Header{
  
    
    headerMenuActive(){
        const menu = document.querySelector('.header__menu')
        const menuBody = document.querySelector('.header-menu__body')
        menu.classList.toggle('header__menu_active')
        menuBody.classList.toggle('header-menu__body_active')
        
        
    }

    hederScroll(){
        window.onscroll=()=>{
            const headerItem = document.querySelector('.header-item')
            const arrowBtn = document.querySelector('.arrow__btn')
            const Y = window.scrollY;
            if(Y>300){
                headerItem.classList.add('header-item__fixed')
                arrowBtn.classList.add('arrow__btn_visible')
                
            }else if(Y<300){
                headerItem.classList.remove('header-item__fixed')
                arrowBtn.classList.remove('arrow__btn_visible')
            }
        }
    }
   
      
   

    arrowBtnScrollTo(event){
        
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        });  
        event.preventDefault();
    }
    
    render(){
        
        let html= `<div class="header-content" >
                        <div class='header-img__triangle'>
                        <img src="img/Rectangle 126.png" alt="uups"/>
                        </div>
                        <div class='header-img__rhombus'>
                        <img src="img/Vector.png" alt="uups"/>
                        </div>
                        
                        <div class="header-menu__body">
                            <ul class="header-menu__list">
                                <li class="header-list__item"> <a href="#">Welcome</a>  </li>
                                <li class="header-list__item"> <a href='#'>О нас</a>  </li>
                                <li class="header-list__item">  <a href='#'>Контакты</a> </li>
                                <li class="header-list__item"> <a href='#'>Преимущества</a>  </li>
                            </ul>
                         </div>
                            
                        <div class='header-item'>
                                <button class='header-item__button btnanimhide'> <img class='btnphone__icon' src='img/Mobile.png'/>  <span>+375 (17) 215-61-15</span>  </button>
                                <button class="header__menu btnanimtada"  onclick="headerPage.headerMenuActive()"> <span></span></button>
                        </div>
                        <div class='header__text'>
                            <h1 class='header__title'>Информационные услуги в области безопасности</h1>
                            <p class='header__subtitle'>Проверка деловой репутации компании</p>
                            <button class='header-text__button btnanimhide'>  <span> Подробнее  </span></button>
                        </div>
                        
                        <div class="header__slider">
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                   
                                    <div class="swiper-slide"><img src="img/header_slid_7.jpg" alt="Ой, картинки нет"/></div>
                                        
                                    <div class="swiper-slide"><img src="img/header_slid_6.jpg" alt="Ой, картинки нет"/></div>
                                            
                                    <div class="swiper-slide"><img src="img/header_slid_4.jpg" alt="Ой, картинки нет"/></div>   
                                    <div class="swiper-slide"><img src="img/header_slid_8.jpg" alt="Ой, картинки нет"/></div>
                                        
                                    

                                

                               
                            
                                </div>
                               

                            </div>
                        </div>
                        <a class="arrow__btn btnanimtada"  href="#"  onclick="headerPage.arrowBtnScrollTo(event)"><img src="img/Group 1086.png" alt="uups"></a>


                    </div>`
        
        
        root_header.innerHTML=html
    }
        
    


    
}



const headerPage = new Header();
headerPage.render()
headerPage.hederScroll()





