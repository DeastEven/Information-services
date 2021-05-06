class Footer{
    render(){
        let html = 
             `<div class="footer-bg">
                    <div class="footer-wrapper container">
                        <h4 class="footer__title">Услуги</h4>
                        <div class="footer__inner">
                            <div class="footer__top">
                                <ul class="footer__list">
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">Информационные услуги в области безопасности</a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">Услуги по обеспечению безопасности</a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">Услуги в области трудовых отношений</a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">Услуги в области бухгалтерского, налогового учета и отчетности</a>
                                    </li>
                                </ul>
                                <ul class="footer__list">
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">Услуги в области маркетинга</a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">Услуги по внедрению системы менеджмента качества</a>
                                    </li>
                                    <li class="footer__item">
                                        <a href="#" class="footer__link">Название услуги</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer__bottom">
                                <ul class="footer__social">
                                    <li class="footer-social__item btnanimtada">
                                        <a href="#" class="footer-social__link">
                                            <img src="img/Footer/Group 1152.png" alt="oops"/>
                                        </a>
                                    </li>
                                    <li class="footer-social__item btnanimtada">
                                        <a href="#" class="footer-social__link">
                                            <img src="img/Footer/Group 1153.png" alt="oops"/>
                                        </a>
                                    </li>
                                    <li class="footer-social__item btnanimtada">
                                        <a href="#" class="footer-social__link">
                                            <img src="img/Footer/Group 1154.png" alt="oops"/>
                                        </a>
                                    </li>
                                    <li class="footer-social__item btnanimtada">
                                        <a href="#" class="footer-social__link">
                                            <img src="img/Footer/Group 1155.png" alt="oops"/>
                                        </a>
                                    </li>
                                    <li class="footer-social__item btnanimtada">
                                        <a href="#" class="footer-social__link">
                                            <img src="img/Footer/Group 1156.png" alt="oops"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`;

        root_footer.innerHTML=html
    }
}

const footerPage = new Footer()
footerPage.render()