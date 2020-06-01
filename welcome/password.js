function password(self){
    const password = '1234';
    console.log('password:'+ password)
    const getPassword = prompt('패스워드를 입력하세요.', '');

    if(getPassword === password){
        location.href = "../project/project.html";
    } else {
        alert('잘못 입력하셨습니다.')
    } 
}

