var danmuRoll = require('./danmu.js');
//发送弹幕按钮
$('#sendDanmu').on('click', function() {
  var _thisTxt = $.trim($('#danmuInput').val());
  if (_thisTxt) {
    danmuRoll(_thisTxt);
    $('#danmuInput').val('');
  } else {
    console.log('输入内容无法为空！');
    return;
  }
});
