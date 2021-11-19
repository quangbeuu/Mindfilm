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


// 1. Hiện thằng Form đăng nhập

document.getElementsByClassName("signin-btn")[0].addEventListener("click",(e)=>{
    loginBlock();
})
document.getElementsByClassName("signin-btn")[1].addEventListener("click",(e)=>{
    loginBlock();
})

function loginBlock(){
    document.getElementsByClassName("movie__wrap")[0].style.display = "none";
    document.getElementsByClassName("movie__login")[0].style.display = "block";
}

function wrapBlock(){
    document.getElementsByClassName("movie__wrap")[0].style.display = "block";
    document.getElementsByClassName("movie__login")[0].style.display = "none";
}
// 2. Hiện Form đăng ký

document.getElementsByClassName("signup-btn")[0].addEventListener("click",(e)=>{
    loginBlock();
    signupBlock();
})


// 3. Tùy biến đăng nhập
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
            if(check == true){
                wrapBlock();
                let menuBtn = document.getElementsByClassName("sigin-menu"); 
                menuBtn[0].style.visibility="hidden";

                document.getElementsByClassName("signin-slidebar")[0].style.display = "none";
                document.getElementsByClassName("signup-btn")[0].style.display = "none";
                document.getElementsByClassName("signout-btn")[0].style.display = "block";
                document.getElementsByClassName("movie__slidebar-username")[0].innerHTML = `Username: ${username}`
            }
        }
    }

    if(check == false){
        alert(`Login failed. Incorrect account and password!`);
    }
})

// 4. Thay đổi giao diện Đăng nhập, đăng ký và ngược lại
document.getElementsByClassName("sign-in")[0].addEventListener("click", function(event){
    signupBlock();
})

document.getElementsByClassName("sign-up")[0].addEventListener("click", function(event){
    signinBlock();
})

function signupBlock(){
    document.getElementsByClassName("movie__signin")[0].style.display = "none";
    document.getElementsByClassName("movie__signup")[0].style.display = "block";
}

function signinBlock(){
    document.getElementsByClassName("movie__signin")[0].style.display = "block";
    document.getElementsByClassName("movie__signup")[0].style.display = "none";
}


// 5. Tùy biến đăng ký
document.querySelector(".movie__signup-form-submit").addEventListener("click",function(event){
    let elementError = document.querySelectorAll(".movie__signup error");
    for (let i = 0; i<elementError.length;i++){
        elementError[i].textContent = "";
    }

    let username = document.getElementById("username-signup").value;
    let email = document.getElementById("email-signup").value;
    let password = document.getElementById("password-signup").value;

    // Kiểm tra hợp lệ

    let check = true; 
    if(!username){
        document.getElementById("username-signup").nextElementSibling.textContent = "Username cannot be empty!"
        check = false;
    }

    if(!email){
        document.getElementById("email-signup").nextElementSibling.textContent = "Email cannot be empty!";
        check = false; 
    }

    if(!password){
        document.getElementById("email-signup").nextElementSibling.textContent = "Email cannot be empty!";
        check = false;
    }


    //Thêm vào mảng user
    if(check == true){
        let obj = {
            id: Math.round(Math.random()*100),
            username: username,
            email: email,
            account: "user",
            password: password
        }
        users.push(obj);
        alert("Successful account registration!");

        // ẩn đăng ký hiện đăng nhập
        signinBlock();
    }
})