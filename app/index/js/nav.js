$('#login').hover(function(e) {
  $(this).text('并不');
}, function(e) {
  $(this).text('登录');
});

function loginEvent() {
  var _thisFlag = 0;
  $('#login').on('click', function(e) {
    _thisFlag++;
    console.log(_thisFlag);
    if(_thisFlag >= 5 && _thisFlag < 10){
      $(this).text('去你大爷的你再点试试！');
    } else if(_thisFlag >=10 && _thisFlag < 15){
      $(this).text('信不信我用我的小锤锤锤你胸口！');
    } else if (_thisFlag >= 15) {
      $(this).text('吃我一锤！');
    }
  });
}

loginEvent();
