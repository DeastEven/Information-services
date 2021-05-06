
class AboutUs{
    render(){

        let html = `<div class="about-us__body container" >   
                        <div class= "about-us__img">
                            <img src="img/why-cambay-digital 1.png" alt="uups"/>
                        </div>
                        <div class="about-us__text">
                            <h2 class="about-us__title">О нас</h2>
                            <p class="about-us__subtitle-1"> <span> ООО «Сервис» создано в 2019 году </span> для повышения операционной эффективности клиентов за счет приема на аутсорсинг обеспечивающих и вспомогательных бизнес-процессов (их отдельных этапов), что позволяет клиентам  сфокусироваться на основных видах деятельности и с помощью структурной реорганизации оптимизировать расходы.
                            </p>
                            <p class="about-us__subtitle-2"> Участниками организации являются дочернее предприятие ОАО «Банк» - УСП «ЭБ Страхование» совместно с ООО «БДО Ашуренс»  членом — международного объединения независимых аудиторских и консалтинговых компаний BDO International Limited.
                            </p>
                            <div class="about-us__subtitle-3"><span class="about__amount">160</span> <span class="about__text">сотрудников компании</span></div>
                            
                    
                        </div>
                        
                    </div>`

        

        root_aboutUs.innerHTML=html
    }

}   

const aboutUsPage = new AboutUs()
aboutUsPage.render()
