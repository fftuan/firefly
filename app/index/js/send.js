var danmuRoll = require('./danmu.js');
//发送弹幕按钮
$('#sendDanmu').on('click', function() {
  var text = $.trim($('#danmuInput').val());
  danmuRoll(text);
  $('#danmuInput').val('');
});
