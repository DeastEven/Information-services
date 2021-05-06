class Advantages{
    itemActive(){
        
        const itemActive = document.querySelectorAll('.advantages__item').forEach((item)=>{
           item.addEventListener('click',()=>{
               item.classList.toggle('advantages__item_active') 
            })
        })
    }
    
    


    render(){
        let html = 
                    `<div class="advantages__wrapper container">
                        <h2 class="advantages__title">Преимущества аутсорсинга</h2>
                        <div class="advantages__grid">
                            <div class="advantages__column">
                                <div class="advantages__item">
                                    <div class="advantages-item__wrapper">
                                        <div class="advantages-item__left">
                                            <div class="advantages-item__img">
                                                <img src="img/Advantages/Group.png" alt="uups"/>
                                            </div>
                                            <div class="advantages-item__subtitle">
                                                <p>Вы получаете <span>услуги высокого качества</span> в короткий срок</p>
                                            </div>
                                        </div>
                                        <div class="advantages-item__right">
                                            <div class="advantages-item__icon">
                                            <img src="img/Advantages/Group_5.png" alt="uups"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="advantages-item__text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro facere itaque! Suscipit quae impedit autem quasi tempora, nam iure eum ducimus vel cupiditate est voluptatem consectetur nihil quaerat reiciendis?
                                            </p>
                                    </div>
                                </div>
                                <div class="advantages__item">
                                    <div class="advantages-item__wrapper">
                                        <div class="advantages-item__left">
                                            <div class="advantages-item__img">
                                                <img  src="img/Advantages/Group_3.png" alt="uups"/>
                                            </div>
                                            <div class="advantages-item__subtitle">
                                                <p><span>Избавляет от обязательств</span> по трудовому законодательству</p>
                                            </div>
                                        </div>
                                        <div class="advantages-item__right">
                                            <div class="advantages-item__icon">
                                            <img src="img/Advantages/Group_5.png" alt="uups"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="advantages-item__text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro facere itaque! Suscipit quae impedit autem quasi tempora, nam iure eum ducimus vel cupiditate est voluptatem consectetur nihil quaerat reiciendis?
                                            </p>
                                    </div>
                                </div>
                            </div>
                            <div class="advantages__column">
                                <div class="advantages__item">
                                    <div class="advantages-item__wrapper">
                                        <div class="advantages-item__left">
                                            <div class="advantages-item__img">
                                                <img src="img/Advantages/Group_2.png" alt="uups"/>
                                            </div>
                                            <div class="advantages-item__subtitle">
                                                <p><span>Оптимизирует финансовые затраты</span> предприятия</p>
                                            </div>
                                        </div>
                                        <div class="advantages-item__right">
                                            <div class="advantages-item__icon">
                                            <img src="img/Advantages/Group_5.png" alt="uups"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="advantages-item__text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro facere itaque! Suscipit quae impedit autem quasi tempora, nam iure eum ducimus vel cupiditate est voluptatem consectetur nihil quaerat reiciendis?
                                            </p>
                                    </div>
                                </div>
                                <div class="advantages__item">
                                    <div class="advantages-item__wrapper">
                                        <div class="advantages-item__left">
                                            <div class="advantages-item__img">
                                                <img src="img/Advantages/Group_4.png" alt="uups"/>
                                            </div>
                                            <div class="advantages-item__subtitle">
                                                <p><span>Дает возможность сосредоточиться</span> на основных бизнес-процессах</p>
                                            </div>
                                        </div>
                                        <div class="advantages-item__right">
                                            <div class="advantages-item__icon">
                                            <img src="img/Advantages/Group_5.png" alt="uups"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="advantages-item__text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro facere itaque! Suscipit quae impedit autem quasi tempora, nam iure eum ducimus vel cupiditate est voluptatem consectetur nihil quaerat reiciendis?
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        
        root_advantages.innerHTML=html
    }
}

const advantagesPage = new Advantages();

advantagesPage.render()
advantagesPage.itemActive()


