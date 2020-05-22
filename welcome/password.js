function password(self){
    console.log("password")
    const password = '1234';
    const getPassword = prompt('패스워드를 입력하세요.', '');

    if(getPassword === password){
        location.href = "../project/project.html";
    } else {
        alert('잘못 입력하셨습니다.')
    } 
}

