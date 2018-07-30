

setInterval("getTimeLeft()",1000);
    function getTimeLeft(){
      var date = new Date();
          var year = date.getFullYear();
          var newDate = new Date();
          newDate.setFullYear(2018,3,20);

          newDate.setHours(21,23,0);
          var itime = date.getTime()-newDate.getTime();
          var isecond = parseInt(itime/1000);
          var newDay = parseInt(isecond/24/60/60);
          var modeDay = isecond%(24*60*60);
          var newHour = parseInt(modeDay/60/60);
          var modeHour = modeDay%(60*60);
          var newMinute = parseInt(modeHour/60);
          var modeMinute = modeHour%60;
          var newSecond = parseInt(modeMinute);


    document.getElementById('days').innerText=newDay;
    document.getElementById('days1').innerText=newDay+1;
    document.getElementById('loveDay').innerText=newDay-97;
    document.getElementById('hours').innerText=newHour;
    document.getElementById('mins').innerText=newMinute;
    document.getElementById('seconds').innerText=newSecond;

    // document.write(year+"年还剩"+newDay+"天"+newHour+"时"+newMinute+"分"+newSecond+"秒"+);
  };
