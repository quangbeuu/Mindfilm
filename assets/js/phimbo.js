const loadFilms = async() => {
    try{
        const api = await fetch("https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3oYxXd4dA_aVtsddh6Cprx6ySoKEFeKZp-_v0_y8iF-DBG7GhbwkXFvUw");
        const responseApi = await api.json();
        allFilm = responseApi.phim;
        console.log(allFilm)
        displayFilm(allFilm);
    }catch(err){
        console.error(err);
        console.log("Lỗi kết nối");
    }
}

loadFilms()

// b. Đổ lên trang html
const displayFilm = (film) => {
    let phimbo = film['phimbo']
    let htmlString = phimbo
        .map((phimbo) =>{
            return `
            <div class="movie__item">
                <img src="${phimbo.imageUrl}" alt="" class="movie__image">
                <h1 class="movie__title">${phimbo.title}</h1>
            </div>
            `
        })
    document.getElementById("phimbo").innerHTML = htmlString;
}


// 2. Mở đóng thanh Slidebar

let movieSlidebarOpen = document.getElementById('movie__menu-open');
let movieSlidebarClose = document.getElementById('movie__slidebar-close');
let movieSlidebarContainer = document.getElementById('movie__slidebar-container')

function showSlidebar(){
    movieSlidebarContainer.classList.add('movie__slidebar-open')
}

movieSlidebarOpen.addEventListener('click',showSlidebar);

function hideSlidebar(){
    movieSlidebarContainer.classList.remove('movie__slidebar-open')
}

movieSlidebarClose.addEventListener('click',hideSlidebar);