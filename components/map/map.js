class Mapp{
    render(){
        let html = 
                    `<div class="map__body">
                        <iframe loading="lazy" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aecc7c2ad4d07982fe2b99c7949c81197809ef159b0eca5c1e75b1800e30d8e66&amp;source=constructor" width="100%" frameborder="0"></iframe>
                    </div>`;
        root_map.innerHTML=html
    }
}

const mapPage = new Mapp();
mapPage.render()