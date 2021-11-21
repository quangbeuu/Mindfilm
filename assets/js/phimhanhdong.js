const loadFilms = () => {
    try{
        allFilm = data.phim;
        console.log(allFilm)
        displayFilm(allFilm);
    }catch(err){
        console.error(err);
        console.log("Lỗi kết nối");
    }
}



// b. Đổ lên trang html
const displayFilm = (film) => {
    let phimhanhdong = film['phimhanhdong']
    let htmlString = phimhanhdong
        .map((phimhanhdong) =>{
            return `
            <div class="movie__item">
                <img src="${phimhanhdong.imageUrl}" alt="" class="movie__image">
                <h1 class="movie__title">${phimhanhdong.title}</h1>
            </div>
            `
        }).join("")
    document.getElementById("phimhanhdong").innerHTML = htmlString;
}

loadFilms()

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