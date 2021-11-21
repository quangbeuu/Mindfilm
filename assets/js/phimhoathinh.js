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
    let phimhoathinh = film['phimhoathinh']
    let htmlString = phimhoathinh
        .map((phimhoathinh) =>{
            return `
            <div class="movie__item">
                <img src="${phimhoathinh.imageUrl}" alt="" class="movie__image">
                <h1 class="movie__title">${phimhoathinh.title}</h1>
            </div>
            `
        }).join("")
    document.getElementById("phimhoathinh").innerHTML = htmlString;
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