// 引入基本样式文件
require('./index.css');
// require('../node_modules/bootstrap/dist/css/bootstrap.css');
// 目前bs读取bug 正在调整，弹幕输入框和发送样式没有，但并不影响功能





// 封装播放器插件

(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }

}(function($) {
  var pluginName = 'danmuPlayer';
  // 默认参数配置
  var defaults = {};

  // 缓存参数
  function Plugin(element, options) {
    this.options = $.extend({}, defaults, options);
    this.init();
  };

  // 原型功能
  Plugin.prototype.init = function() {
    console.log($('#danmuPlayer '));
  };

  // 暴露接口
  $.fn[pluginName] = function(options) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
      var $this = $(this),
        data = $this.data('plugin_' + pluginName);
      if (!data) {
        $this.data('plugin_' + pluginName, (data = new Plugin(this, options)));
      };
      if (typeof options === 'string') {
        data[options].apply(data, args);
      };
    });
  };

}));


var $media = $('#danmuPlayer');

$media.on('timeupdate',function(e){
  console.log(this.currentTime);
});

$media.on('play',function(){
  console.log('It is play event');
});

$media.on('pause',function(){
  console.log('It is pause event');
});


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

//发送弹幕按钮
$('#sendDanmu').on('click',function(){
  var text = $('#danmuInput').val();
  danmuRoll(text);
  $('#danmuInput').empty();
});
