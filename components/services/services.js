class Services{

    render(){

        
        let html = 

        `<div class="services__wrapper container">
            <h2 class="services__title">Наши услуги</h2>
            <div class="services__grid">
                <div class="services__row">
                    <div class="services__items services__items_bg-blue">
                        <div class="services__text services__text_blue">
                            <p>Информационные услуги в области безопасности</p>
                        </div>
                        <div class="services__img services__img_blue">
                        <img src="img/Services/Rectangle 140.png" alt="uups"/>
                        </div>
                    </div>
                    <div class="services__items services__items_bg-green">
                        <div class="services__text services__text_green">
                            <p>Услуги по обеспечению безопасности</p>
                        </div>
                        <div class="services__img services__img_green">
                        <img src="img/Services/Rectangle 141.png" alt="uups"/>
                        </div>
                    </div>
                </div>
                <div class="services__row">
                    <div class="services__items services__items_bg-azure">
                        <div class="services__text services__text_azure">
                            <p>Услуги в области трудовых отношений</p>
                        </div>
                        <div class="services__img services__img_azure">
                        <img src="img/Services/Rectangle 142.png" alt="uups"/>
                        </div>
                    </div>
                    <div class="services__items services__items_bg-orange">
                        <div class="services__text services__text_orange">
                            <p>Услуги в области бухгалтерского, налогового учета и отчетности</p>
                        </div>
                        <div class="services__img services__img_orange">
                        <img src="img/Services/Rectangle 143.png" alt="uups"/>
                        </div>
                    </div>
                    <div class="services__items services__items_bg-red">
                        <div class="services__text services__text_red">
                            <p>Услуги в области маркетинга</p>
                        </div>
                        <div class="services__img services__img_red">
                        <img src="img/Services/Rectangle 144.png" alt="uups"/>
                        </div>
                    </div>
                </div>
                <div class="services__row">
                    <div class="services__items services__items_bg-dgr">
                        <div class="services__text services__text_dgr">
                            <p>Услуги по внедрению системы менеджмента качества
                            </p>
                        </div>
                        <div class="services__img services__img_dgr">
                        <img src="img/Services/Rectangle 145.png" alt="uups"/>
                        </div>
                    </div>
                    <div class="services__items services__items_bg-grey">
                        <div class="services__text services__text_grey">
                            <p>Название услуги</p>
                        </div>
                        <div class="services__img services__img_grey">
                        <img src="img/Services/Rectangle 146.png" alt="uups"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        

        root_services.innerHTML=html
    }
}

const servicesPage = new Services()
servicesPage.render()