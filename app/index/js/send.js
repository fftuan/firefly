//发送弹幕按钮
$('#sendDanmu').on('click',function(){
  var text = $('#danmuInput').val();
  danmuRoll(text);
  $('#danmuInput').empty();
});
