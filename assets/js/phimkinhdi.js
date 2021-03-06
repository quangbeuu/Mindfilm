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
    let phimkinhdi = film['phimkinhdi']
    let htmlString = phimkinhdi
        .map((phimkinhdi) =>{
            return `
            <div class="movie__item">
                <a href="film.html?id=${phimkinhdi.id}">
                    <img src="${phimkinhdi.imageUrl}" alt="" class="movie__image">
                    <h1 class="movie__title">${phimkinhdi.title}</h1>
                </a>
            </div>
            `
        }).join("")
    document.getElementById("phimkinhdi").innerHTML = htmlString;
}

loadFilms()

// 1. Loadmore btn
const loadmore = document.querySelector("#loadmore");
let currentItems = 12;

loadmore.addEventListener("click",(e)=>{
    const elementList = [...document.querySelectorAll('.movie__item')];
    for (let i = currentItems; i < currentItems + 8; i++){
        if(elementList[i]){
            elementList[i].style.display = 'block'; 
        }
    }
    currentItems += 8;

    // Nút sẽ ẩn đi khi nút được tải đầy đủ 
    if (currentItems >= elementList.length){
        e.target.style.display = "none"
    }
})

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