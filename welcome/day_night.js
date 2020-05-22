let Body = {
    setColor:function (color){
      $('body').css('color', color);  
    },
    setBackgroundColor:function (color){
        $('body').css('backgroundColor', color);
    },
    setBorderColor:function (color){
        $('body').css('border', color);
    }
}

const dayNightBtn = document.querySelector('#day_night');

function day_nightHandler(self){
    console.log(self.value)
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('blanchedalmond');
        Body.setBorderColor('blanchedalmond');
        self.value = 'day';
        dayNightBtn.style.right = '35px';
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('rgb(46, 52, 63)');
        Body.setBorderColor('rgb(46, 52, 63)');
        self.value = 'night';
        dayNightBtn.style.right = '65px';        
    }
}

