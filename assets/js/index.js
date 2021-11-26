// 1. Đổ API sang trang html


// a. Đọc API
const loadFilms = () => {
    try {
        allFilm = data.phim;
        Object.keys(allFilm).forEach((key) => {
            allFilm[key].forEach((movie) => {
                fullFilm.push(movie);
            })
        })
        console.log(fullFilm)
        console.log(allFilm)

        // Chỉ in ra 8 phim thôi
        Object.keys(allFilm).forEach((key) => {
            allFilm[key].length -= allFilm[key].length - 8
        })
        displayFilm(allFilm);
    } catch (err) {
        console.error(err);
        console.log("Lỗi kết nối");
    }
}



// b. Đổ lên trang html

const displayFilm = (film) => {
    console.log(film)
    let content = document.querySelector(".movie__content")
    content.innerHTML = "";
    for (let key in film) {
        let filmAll = film[key];
        console.log(filmAll[0])
        if (!Array.isArray(filmAll)) {
            let arr = []
            arr.push(filmAll);
            filmAll = arr;
        }
        content.innerHTML += `
            <div class="movie__box">
                <div class="movie__header-wrap">
                    <h2 class="movie__header">
                        <i class="fas fa-film"></i>
                        ${filmAll[0].category.toUpperCase()}
                    </h2>
                    <p class="movie__expand">
                        <a href="${key}.html">
                            <i class="fa fa-angle-double-right"></i>
                            Xem tất cả
                        </a>
                    </p>
                </div>
                <div class="movie__list" id="${key}">
                </div>
            </div>
        `
        console.log(key)

        let htmlString = filmAll
            .map((movie) => {
                console.log(movie)
                return `
                <div class="movie__item">
                <a href="film.html?id=${movie.id}">
                    <img src="${movie.imageUrl}" alt="" class="movie__image">
                    <h1 class="movie__title">${movie.title}</h1>
                    <h2 class="movie__subtitle">${movie.subtitle}</h2>
                </a>
                </div>
                `
            })
            .join("");
        document.getElementById(key).innerHTML += htmlString;

        console.log(htmlString)
    }
}

// c. Search
const searchMovie = document.querySelector('#btn-search');
const searchMovieSlidebar = document.querySelector('#search-slidebar');
const inputMovie = document.getElementById("movie__search");
const inputMovieSlidebar = document.getElementById('movie-search-slidebar')


let allFilm = [];

// fullFilm là tập chứa tất cả các film ko phân biệt thể loại
let fullFilm = []

// + Tìm kiếm khi click vào icon button
searchMovie.addEventListener("click", (e) => {
    e.preventDefault();
    searchEvent();
})

searchMovieSlidebar.addEventListener("click", (e) => {
    e.preventDefault();
    searchEventSlidebar();
})

// + Tìm kiếm khi gõ r ấn enter 
inputMovie.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchEvent()
    }
})

inputMovieSlidebar.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchEventSlidebar()
    }
})

function searchEvent() {
    const searchString = document.querySelector("#movie__search").value.toLowerCase();
    console.log(allFilm)

    if (searchString !== "") {
        const filterMovies = fullFilm.filter((film) => {
            return film.title.toLowerCase().includes(searchString)
        })
        console.log(filterMovies);
        displayFilm(filterMovies);
    } else {
        alert("Bạn chưa điền gì!");
    }

    let movieItem = document.querySelectorAll(".movie__item");
    document.querySelector(".movie__count").innerHTML = `Đã tìm thấy ${movieItem.length} phim`;
}

function searchEventSlidebar() {
    const searchStringSlidebar = document.querySelector("#movie-search-slidebar").value.toLowerCase();
    console.log(searchStringSlidebar);
    console.log(allFilm)

    if (searchStringSlidebar !== "") {
        const filterMovies = fullFilm.filter((film) => {
            return film.title.toLowerCase().includes(searchStringSlidebar)
        })
        console.log(filterMovies);
        displayFilm(filterMovies);
    } else {
        alert("Bạn chưa điền gì!");
    }

    let movieItem = document.querySelectorAll(".movie__item");
    document.querySelector(".movie__count").innerHTML = `Đã tìm thấy ${movieItem.length} phim`;
}

loadFilms()


// 2. Mở đóng thanh Slidebar

let movieSlidebarOpen = document.getElementById('movie__menu-open');
let movieSlidebarClose = document.getElementById('movie__slidebar-close');
let movieSlidebarContainer = document.getElementById('movie__slidebar-container')

function showSlidebar() {
    movieSlidebarContainer.classList.add('movie__slidebar-open')
}

movieSlidebarOpen.addEventListener('click', showSlidebar);

function hideSlidebar() {
    movieSlidebarContainer.classList.remove('movie__slidebar-open')
}

movieSlidebarClose.addEventListener('click', hideSlidebar);


// 3. Làm thanh slider

window.addEventListener("load", function () {
    const slider = document.querySelector(".movie__slider");
    const sliderMain = document.querySelector(".movie__slider-main");
    const sliderItems = document.querySelectorAll(".movie__slider-item")
    const nextBtn = document.querySelector(".movie__slider-next");
    const prevBtn = document.querySelector(".movie__slider-prev");
    const dotItems = document.querySelectorAll(".movie__slider-dot-item");

    // Lấy width của hình ảnh
    const sliderItemWidth = sliderItems[0].offsetWidth;
    // Lấy số lượng hình ảnh hiện có
    const sliderLength = sliderItems.length;



    let positionX = 0
    let index = 0

    nextBtn.addEventListener("click", function () {
        // Nếu là 1 thì next slide
        handleChangeSlide(1);
    })
    prevBtn.addEventListener("click", function () {
        // Nếu là 1 thì next slide
        handleChangeSlide(-1);
    });

    [...dotItems].forEach((item) =>
        item.addEventListener("click", function (e) {
            [...dotItems].forEach(el => el.classList.remove("active"));
            e.target.classList.add("active");
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            positionX = -1 * index * sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        }));

    function handleChangeSlide(direction) {
        if (direction === 1) {
            if (index >= sliderLength - 1) {
                index = sliderLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
            index++;
        } else if (direction === -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
            index--;
        }
        [...dotItems].forEach(el => el.classList.remove("active"));
        dotItems[index].classList.add("active");
    }
})