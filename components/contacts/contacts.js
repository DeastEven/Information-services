
class Contacts{
    render(){
        let html =
                    `<div class="conatcts-bg">
                        <div class="contacts-wrapper container">
                            <div class="contacts-left">
                                <h2 class="contacts__title">
                                    Контакты
                                </h2>
                                <p class="contacts__text"><span>Телефон:</span> +375 26 909-00-00</p>
                                <p class="contacts__text"><span>Емейл:</span> example@gmail.com</p> 
                                <p class="contacts__text"><span>Адрес:</span> 279987 г. Минск, ул. Октябрьская, 65, оф. 678</p>
                            </div>
                            <div class="contacts-right">
                                <form class="contacts-right__form">
                                    <h3 class="contacts-form__title">
                                        Хотите получить консультацию?
                                    </h3>
                                    <div class="contacts-form__group">
                                        <input class="contacts-form__input" placeholder=" "/>
                                        <label class="contacts-form__label">Имя</label>
                                    </div>
                                    <div class="contacts-form__group">
                                        <input class="contacts-form__input" placeholder=" "/>
                                        <label class="contacts-form__label">Телефон</label>
                                    </div>
                                     <div class="contacts-form__group">
                                        <p class="contacts-area__title">Ваше сообщение (необязательно)</p>
                                        <textarea class="contacts-form__area"></textarea>
                                    </div>
                                    <button class="contacts-form__btn btnanimhide">Перезвоните мне</button>
                                </form>
                            </div>
                        </div>
                        <div class="contacts-bg__img">
                            <img src="img/Vector_2.png"  alt="oops"/>
                        </div>
                    </div>`;
        root_contacts.innerHTML=html
    }
}

const contactsPage = new Contacts();
contactsPage.render();