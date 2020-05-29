//사용자의 위도 경도 받기 -> 그것에서 온도와 장소 뽑아내기 -> html에 추가하기

const COORDS = "coords" //위도 ... 경도 ...

const API_KEY = "a5a6cd339a9efe9c2963df8cd627e03e"

const weather = document.querySelector(".js-weather");


//response: JSON -> 자바스크립트용으로 변환해야함.

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json() //자바스크립트용 JSON 명령
    }).then(function(json){
        console.log(json)
        const temperature = json.main.temp;
        const name = json.name;
        console.log(temperature);
        console.log(name);
        weather.innerText = `Today's temperature: ${temperature}°C \n Location: ${name}` 
    })


}

function saveCoords(coordsOjb){
    localStorage.setItem(COORDS, JSON.stringify(coordsOjb))
} //COORDS : JSON 형식으로 위도와 경도가 들어가게함

function handlesuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsOjb = {
        latitude,
        longitude
    } //coordsObj - 위도 경도
    saveCoords(coordsOjb) 
}

function handleerror(){
    console.log('error');
}

function askforPosition(){
    navigator.geolocation.getCurrentPosition(handlesuccess, handleerror);
}

function loadedCoords(){
    const loadedcoords = localStorage.getItem(COORDS)
    console.log(loadedCoords)
    if(loadedcoords === null){
        askforPosition()
    } else {
        const parsecoords = JSON.parse(loadedcoords);
        getWeather(parsecoords.latitude, parsecoords.longitude);
    }

} // 위도와 경도를 집어넣어서 온도와 장소를 가져오는 함수

function init(){
     loadedCoords()
} //실행할 것

init(); //실행할 것을 실행