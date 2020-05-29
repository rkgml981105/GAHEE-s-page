let Body = {
    setColor:function (color){
      $('body').css('color', color);  
    },
    setWeatherColor:function (color){
        $('.js-weather').css('color', color);
    },
    setBackgroundColor:function (color){
        $('body').css('backgroundColor', color);
    },
    setBorderColor:function (color){
        $('.about-me').css('border', color);
        $('.comment').css('border', color);
    },
    setWeatherBorderColor:function (color){
        $('.js-weather').css('border', color);
    },
    setContactBorderColor:function (color){
        $('#contact').css('border-top', color);
    }
}

const dayNightBtn = document.querySelector('#day_night');

function day_nightHandler(self){
    console.log(self.value)
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('blanchedalmond');
        Body.setWeatherColor('blanchedalmond');
        Body.setBorderColor('blanchedalmond 3px solid');
        Body.setWeatherBorderColor('blanchedalmond 1.5px solid');
        Body.setContactBorderColor('blanchedalmond 5px solid');
        self.value = 'day';
        dayNightBtn.style.right = '35px';
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('rgb(46, 52, 63)');
        Body.setWeatherColor('rgb(46, 52, 63)');
        Body.setBorderColor('rgb(46, 52, 63) 3px solid');
        Body.setWeatherBorderColor('rgb(46, 52, 63) 1.5px solid');
        Body.setContactBorderColor('rgb(46, 52, 63) 5px solid');
        self.value = 'night';
        dayNightBtn.style.right = '65px';        
    }
}

