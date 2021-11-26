const urlSearch = new URLSearchParams(window.location.search);
const filmId = urlSearch.get("id");



// 1. Hàm lấy dữ liệu và ktra id
function getFilmById(id){
    try {
        let listMovie = data.phim;
        Object.keys(listMovie).forEach((key)=>{
            for(let item of listMovie[key]){
                if (item.id == id){
                    displayFilm(item)
                }
            }
        })
    }catch(err){
        console.log(err);
    }
}


// 2. Hàm đổ ra HTML 

function displayFilm(film){
    document.title = film.title
    console.log(film)
    let bcn = document.querySelector(".movie__background");
    console.log(bcn);
    bcn.style.backgroundImage = `url("${film.background}")`;
    let filmHTML = `
    <div class="movie__section">
        <div class="movie__section-container moveup">
            <div class="movie__details">
                <div class="movie__column one-quarter-tablet">
                    <div class="movie__cover">
                        <img src="${film.imageUrl}" alt="img"
                            class="movie__cover-img">
                    </div>
                    <a href="${film.trailer}" class="movie__watch-btn">
                        <i class="movie__watch-icon fa fa-play"></i>
                        Xem trailer
                    </a>
                </div>
                <div class="movie__column main">
                    <h1 class="movie__title-film">${film.title}</h1>
                    <h2 class="movie__subtite">${film.subtitle} (<span class="year">${film.year}</span>)</h2>
                    <div class="movie__meta">
                        <span>2 giờ 35 phút</span>
                    </div>
                    <div class="movie__meta">
                        <span class="imdb-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                <path
                                    d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z"
                                    fill="#ffc107"></path>
                                <path
                                    d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z"
                                    fill="#263238"></path>
                            </svg>
                        </span>
                        <span class="text-bold">${film.imdb}</span>
                    </div>
                    <button class="movie__bookmark">
                        <i class="fa fa-plus class="movie__bookmark-icon"></i>
                        Thêm vào bộ sưu tập
                    </button>
                    
                    <dl class="movie__subinfo">
                        <dt>Quốc gia</dt>
                        <dd>${film.nation}</dd>
                        <dt>Khởi chiếu</dt>
                        <dd>${film.release}</dd>
                    </dl>
                    <div class="movie__intro">
                        ${film.intro}
                    </div>
                    <div class="movie__section-header">Diễn viên</div>
                    <div class="movie__cast">
                        <div class="movie__cast-list">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    document.getElementById("movie__info").insertAdjacentHTML("beforeend",filmHTML)
    let divCastList = document.querySelector(".movie__cast-list");
    let castList = film.cast;
    castList.forEach((dv)=>{
        console.log(dv)
        divCastList.innerHTML += `
        <div class="movie__cast-item">
            <div class="cast-img">
                <img src="${dv.image}" alt="cast2">
            </div>
            <p class="movie__cast-name">${dv.name}</p>
            <p class="movie__cast-character">${dv.character}</p>
        </div>
        `
    })
}

getFilmById(filmId);



