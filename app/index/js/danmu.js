//弹幕功能
/*
 * 配置参数
 * text:文本
 * color:字体颜色
 * fontSize:字体大小
 */
function danmuRoll(text, color, fontSize) {
  var $thisDanmu = $('<span class="danmu-text" style="color:' + color + '; font-size:' + fontSize + ';" >' + text + '</span>');
  var randomNum = parseInt(Math.random() * 100, 10);
  $thisDanmu.css('top', +randomNum + '%');
  $thisDanmu.on('animationend', function(e) {
    $(this).remove();
  });
  $('#displayDanmu').append($thisDanmu);
};

var data = {
  "danmu": [{
      "id": 1,
      "text": "2333",
      "color":"#fff",
      "fontSize": "30px"
    },
    {
      "id": 2,
      "text": "66666",
      "color":"red",
        "fontSize": "40px"
    },
    {
      "id": 3,
      "text": "9999",
      "color":"#fff",
        "fontSize": "50px"
    }
  ]
}

$.map(data.danmu,function(data){
  danmuRoll(data.text,data.color,data.fontSize);
});
