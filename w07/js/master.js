var Body = {
  setBackgroundColor : function(color){
    $('body').css('background-color', color)
    // document.querySelector('body').style.backgroundColor = color;
  }
}
var Links = {
  setColor : function(color){
    $('a').css('color', color)
    // var i = 0;
    // var alist = document.querySelectorAll('a');
    // while (i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // } 
  }
}


function nightDayHandler(self){
  var target = document.querySelector('body');      
  if(self.value == 'day'){
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'night';
    document.querySelector('#night_day_2').value = 'night';
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'blue';
      i = i + 1;
    } 
  } else {
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'day';
    document.querySelector('#night_day_2').value = 'day';
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'powderblue';
      i = i + 1;
    } 
  }
}
// function nightDayHandler(self){
//   var target = document.querySelector('body');
//   if(self.value=='night'){
//     Body.setBackgroundColor('skyblue');
//     Body.setColor('black');
//     Links.setColor('powderblue'); 
//     self.value='day';
//   } else {
//     Body.setBackgroundColor('white');
//     Body.setColor('black');        
//     Links.setColor('blue');
//     self.value='night';
//   }
// } 