function getfilmBookmark (){
    try {
        let listMovie = data.phim;
        Object.keys(listMovie).forEach((key)=>{
            for(let item of listMovie[key]){
                localStorageId(item)
            }
        })
    }catch(err){
        console.log(err);
    }
}



function localStorageId (film) {
    let idBookmark = JSON.parse(localStorage.getItem("idList"));
    console.log(idBookmark)
    idBookmark.forEach((ele)=>{
        console.log(film.id)
        if(film.id == ele){
            document.querySelector(".movie__content").innerHTML += `
                <div class="movie__box">
                    <div class="movie__list" id="phimtinhcam">
                        <div class="movie__item">
                            <a href="film.html?id=${ele}">
                                <img src="${film.imageUrl}" alt="" class="movie__image">
                                <h1 class="movie__title">${film.title}</h1>
                                <h2 class="movie__subtitle">${film.subtitle}</h2>
                            </a>
                        </div>
                    </div>
                </div>
            ` 
        } 
    })
    
}

getfilmBookmark()