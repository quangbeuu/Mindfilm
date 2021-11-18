let users = [
    {
        id: 1,
        username: "Quang",
        email:"superquang09@gmail.com",
        account: "admin",
        password: "123456" 
    },
    {
        id: 2,
        username: "Trang",
        email:"supertrang18@gmail.com",
        account: "user",
        password: "123456" 
    },
    {
        id: 3,
        username: "Thơm",
        email: "superthom14@gmail.com",
        account: "user",
        password: "123456" 
    },
    {
        id: 4,
        username: "Châu",
        email: "superchaucb@gmail.com",
        account: "user",
        password: "123456" 
    },
    {
        id: 5,
        name: "Nhung",
        email: "superchaucb@gmail.com",
        account: "user",
        password: "123456" 
    },
]

// signin 
document.querySelector(".movie__signin-form-submit").addEventListener("click",(e)=>{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value; 

    if(username.trim() == ""){
        document.getElementById("username").nextElementSibling.textContent= "Account cannot be empty!";
    }

    if(!password){
        document.getElementById("password").nextElementSibling.textContent= "Password cannot be empty!";
    }

    let check = false; 

    for(let i = 0; i < users.length; i++){
        if(users[i].username == username && users[i].password == password){
            alert(`Sign up successfully. Hello, ${users[i].username} !`);
            check = true;
            break;
        }
    }

    if(check == false){
        alert(`Login failed. Incorrect account and password!`);
    }
})

// Thay đổi giao diện 
document.getElementsByClassName("sign-in")[0].addEventListener("click", function(event){
    document.getElementsByClassName("movie__signin")[0].style.display = "none";
    document.getElementsByClassName("movie__signup")[0].style.display = "block";
})

document.getElementsByClassName("sign-up")[0].addEventListener("click", function(event){
    document.getElementsByClassName("movie__signup")[0].style.display = "none";
    document.getElementsByClassName("movie__signin")[0].style.display = "block";
})


.document.querySelector(".movie__signup-form-submit").addEventListener("click",function(event){
    let elementError = document.querySelectorAll(".movie__signup error");
    for (let i = 0; i<elementError.length;i++){
        elementError[i].textContent = "";
    }

    let email = document.querySelector("")
})