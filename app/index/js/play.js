var danmuRoll = require('./danmu.js');
// console.log(danmuRoll);


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

var data = {
  "danmu": [{
      "id": 1,
      "text": "2333",
      "color": "#fff",
      "fontSize": "30px",
      "setTime":0.5
    },
    {
      "id": 2,
      "text": "66666",
      "color": "red",
      "fontSize": "40px",
      "setTime":1
    },
    {
      "id": 3,
      "text": "9999",
      "color": "#fff",
      "fontSize": "50px",
      "setTime":1.5
    }
  ]
}

// $.map(data.danmu, function(data) {
//   danmuRoll(data.text, data.color, data.fontSize);
// });


var $media = $('#danmuPlayer');

$media.on('timeupdate',function(e){
  console.log(this.currentTime);
  var time = this.currentTime;
  $.map(data.danmu,function(data){
    if(data.setTime > time){
      // console.log('ok');
      danmuRoll(data.text, data.color, data.fontSize);
    }
  });

});

$media.on('play',function(){
  // console.log('It is play event');
  $('#displayDanmu').find('span').css('animation-play-state','running');
});

$media.on('pause',function(){
  // console.log('It is pause event');
  $('#displayDanmu').find('span').css('animation-play-state','paused');
});
