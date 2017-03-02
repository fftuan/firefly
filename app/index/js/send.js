var danmuRoll = require('./danmu.js');
//发送弹幕按钮
$('#sendDanmu').on('click', function() {
  var _thisTxt = $.trim($('#danmuInput').val());
  if(/你妈/.test(_thisTxt)){
    $('#inputError').text(_thisTxt.replace(/你妈/,'我妈'));
  }
  if (_thisTxt) {
    danmuRoll(_thisTxt);
    $('#danmuInput').val('');
  } else {
    $('#inputError').show().text('输入的内容不能为空！');
    return;
  }
});
