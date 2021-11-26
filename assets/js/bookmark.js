

let btnBookmark = document.querySelector(".movie__bookmark");
let localStorageGet = localStorage.getItem("idList")
localStorageGet = JSON.parse(localStorageGet);

if(localStorageGet.includes(filmId)){
    btnBookmark.innerHTML = `<i class="fa fa-plus class="movie__bookmark-icon"></i> Xóa khỏi bộ sưu tập`;
}else{
    btnBookmark.innerHTML = `<i class="fa fa-plus class="movie__bookmark-icon"></i> Thêm vào bộ sưu tập`;

}

btnBookmark.addEventListener("click", (e)=>{
    btnBookmark.hidden = true;  
    if (btnBookmark.innerText.includes("Thêm vào bộ sưu tập")){
        btnBookmark.innerText = ``;
        btnBookmark.innerHTML += `<i class="fa fa-plus class="movie__bookmark-icon"></i> Xóa khỏi bộ sưu tập`;
        let idList = localStorage.getItem("idList");
        if(idList == null){
            localStorage.setItem("idList",JSON.stringify([filmId]));
        }else{
            // idList là chứa array id film
            idList = JSON.parse(idList);
            idList.push(filmId);
            localStorage.setItem("idList",JSON.stringify(idList));
        }
        
        // LocalStorage chỉ lưu dưới dạng JSON => JSON.parse chuyển từ JSON về đúng kiểu dữ liệu
    }else{
        btnBookmark.innerText = ``;
        btnBookmark.innerHTML += `<i class="fa fa-plus class="movie__bookmark-icon"></i> Thêm vào bộ sưu tập`;
        let tempId = localStorage.getItem("idList");
        console.log(tempId)
        tempId = JSON.parse(tempId);
        let result = tempId.filter(item => {
            item != filmId;
        })
        localStorage.setItem("idList",JSON.stringify(result)); 
    }
})




