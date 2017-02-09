//弹幕功能
/*
 * 配置参数
 * text:文本
 * color:字体颜色
 * fontSize:字体大小
 */
module.exports = function(text, color, fontSize) {
  var $thisDanmu = $('<span></span>')
    .addClass('danmu-text')
    .css({
      'color': color,
      'font-size': fontSize,
      'animation-play-state':'running'
    })
    .text(text);

  var randomNum = parseInt(Math.random() * 100, 10);
  $thisDanmu.css('top', randomNum + '%');
  $thisDanmu.on('animationend', function(e) {
    $(this).remove();
  });

  $('#displayDanmu').append($thisDanmu);
};
