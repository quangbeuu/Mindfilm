
let typeFilm = {
    "Phim bộ":['meomeo',"Tom","Jerry"],
    "Phim chiếu rạp": ["Kasper","Dean"],
    "Phim hoạt hình": ["Jonh","lala"],
    "Phim lẻ": ["My love","My ex"]
}

let filmList = []

// Đổ dữ liệu vào thẻ option 
let selectTag = document.getElementById('film_type'); 
for (let key in typeFilm){
    selectTag.innerHTML += `<option value="${key}">${key}</option>`
}


let number = 0;
function addFilm(){
    // Lấy dữ liệu từ ng dùng
    let name = document.getElementById('film_name').value;
    let type = document.getElementById('film_type').value;
    let image = document.getElementById('film_image').value;
    let episode = document.getElementById('film_episodes').value;
    let link = document.getElementById('film_link').value;

    let tbodyTag = document.getElementById('film_item');
    tbodyTag.innerHTML += `
        <tr>
             <td>${++number}</td>
             <td>${name}</td>
             <td>${type}</td>
             <td>
                 ${image}
             </td>
             <td>${episode}</td>
             <td>
                 ${link}
             </td>
             <td>
                 <button class="manage__button manage__button--yellow" onclick="editFilm(${number - 1})">Sửa</button>
             </td>
             <td>
                 <button class="manage__button manage__button--red" onclick="deleteFilm(${number - 1})">Xóa</button>
             </td>
        </tr>
    `

    let film = {
        "name": name,
        "type": type, 
        "image": image,
        "episode": episode,
        "link": link
    }

    filmList.push(film);
}

function deleteFilm(number){
    // Xóa đi theo vị trí và xóa 1 phần tử
    filmList.splice(number,1)
    showFilm();
}

function showFilm(){
    let tbodyTag = document.getElementById('film_item');
    tbodyTag.innerHTML = ''
    
    for (let i = 0; i < filmList.length;i++){
        let tbodyTag = document.getElementById('film_item');
        tbodyTag.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${filmList[i].name}</td>
            <td>${filmList[i].type}</td>
            <td>
                ${filmList[i].image}
            </td>
            <td>${filmList[i].episode}</td>
            <td>
                ${filmList[i].link}
            </td>
            <td>
                <button class="manage__button manage__button--yellow onclick="editFilm(${i})">Sửa</button>
            </td>
            <td>
                <button class="manage__button manage__button--red" onclick="deleteFilm(${i})">Xóa</button>
            </td>
        </tr>
        `
    }
}

function editFilm(number){
    while(true){   
        let option = Number(prompt(`Lựa chọn mục muốn sửa (bấm số):
            1. Tên phim 
            2. Loại phim 
            3. Link ảnh
            4. Tập số
            5. Link tập phim `));
        switch(option){
            case 1:
                let nameUpdate = prompt("Tên phim mới:");
                filmList[number].name = nameUpdate;
                showFilm()
                break;
            case 2:
                let typeUpdate = prompt("Loại phim mới:");
                filmList[number].type = typeUpdate;
                showFilm()
                break;
            case 3:
                let imageUpdate = prompt("Link ảnh mới:");
                filmList[number].image = imageUpdate;
                showFilm()
                break;
            case 4:
                let episodeUpdate = prompt("Thay đổi tập:");
                filmList[number].episode = episodeUpdate;
                showFilm()
                break;
            case 5:
                let linkUpdate = prompt("Link tập phim mới:");
                filmList[number].link = linkUpdate;
                showFilm()
                break;
            default:
                prompt("Nhập sai rồi. Mời bạn nhập lại !!!");
        }

        let stop = prompt(`
            Nếu không sửa gì nữa thì bấm "s" để dừng lại!!! 
        `)

        if(stop == "s"){
            break
        }
    }
}


